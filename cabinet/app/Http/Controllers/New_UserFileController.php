<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserFile;
use App\Models\Media;
use App\Models\MediaMeta;
use App\Models\UserFileMeta;
use FFMpeg\Coordinate\TimeCode;
use FFMpeg\FFMpeg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use getID3;
use Intervention\Image\ImageManagerStatic;


class New_UserFileController extends Controller
{
    public function store(Request $request)
    {
        \DB::beginTransaction();

        try {
            $validatedData = $request->validate([
                'titleData' => 'string',
                'descriptionData' => 'nullable|string',
                'selectedOption' => 'required|string',
                'fileData' => 'nullable|file'
            ]);

            $userfile = new UserFile();
            $userfile->description = $validatedData['descriptionData'];

            switch ($validatedData['selectedOption']) {
                case '1':
                    $userfile->visible = 'public';
                    break;
                case '2':
                    $userfile->visible = 'private';
                    break;
                case '3':
                    $userfile->visible = 'friends';
                    break;
                default:
                    $userfile->visible = 'private';
            }

            if ($request->hasFile('fileData')) {
                $file = $request->file('fileData');
                $userfile->title = $validatedData['titleData'] ? $validatedData['titleData'] : $file->getClientOriginalName();
                $path = $file->store('uploads', 'public'); // Change this path according to your storage settings
                $fileMimeType = $file->getMimeType();

                if (str_contains($fileMimeType, 'audio')) {
                    $metadata = $this->getAudioMetadataWithArt($path);
                    $userfile->type = 'music';
                } elseif (str_contains($fileMimeType, 'video')) {
                    $metadata = $this->getVideoMetadata($path);
                    $userfile->type = 'video';
                    $savedVideoPath = storage_path('app/public/' . $path);
                    $thumbnailPath = $this->createVideoThumbnail($savedVideoPath);
                    if ($thumbnailPath) {
                        // Припустимо, що у вас є поле thumbnail_url в моделі UserFile
                        $userfile->thumbnail_url = $thumbnailPath;
                    }
                } elseif (str_contains($fileMimeType, 'image')) {
                    $path = $this->saveOptimizedImage($file);
                    // Опціонально: отримайте метадані зображення (розмір, колірна схема тощо)
                } else {
                    // Default metadata processing for other types if needed
                    $metadata = [];
                    $userfile->type = 'other';
                }

                if (!$path) {
                    throw new \Exception("Failed to store userfile file.");
                }

                $userfile->url = Storage::url($path);
                $userfile->userfilable_id = auth()->id();
                $userfile->userfilable_type = User::class;
                $userfile->save();

                // Save metadata and album art if available
                foreach ($metadata as $key => $value) {
                    if ($key === 'albumArt') {
                        // Assume you have a method to save album art
                        // This part depends on how you handle media relations in your application
                        $this->saveMedia($userfile->id, $value, 'album_art');
                    } else {
                        $this->userFileMeta($userfile->id, $key, $value);
                    }
                }
            }

            \DB::commit();
            return response()->json(['message' => 'Post created successfully']);
        } catch (\Exception $e) {
            \Log::error("Error creating video thumbnail: " . $e->getMessage());
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function saveMedia($userId, $url, $type)
    {
        $media = new Media();
        $media->url = $url;
        $media->type = $type;
        $media->mediable_id = $userId;
        $media->mediable_type = UserFile::class;
        $media->save();
    }

    private function userFileMeta($mediaId, $key, $value)
    {
        $userFileMeta = new UserFileMeta();
        $userFileMeta->media_id = $mediaId;
        $userFileMeta->key = $key;
        $userFileMeta->value = $value;
        $userFileMeta->save();
    }

    private function saveAlbumArt($path, $fileInfo)
    {
        // Припустимо, що $fileInfo містить дані про обкладинку альбому
        if (isset($fileInfo['id3v2']['APIC'][0]['data'])) {
            $data = $fileInfo['id3v2']['APIC'][0]['data'];
            $mimeType = $fileInfo['id3v2']['APIC'][0]['mime'];
            $extension = explode('/', $mimeType)[1];
            $filename = uniqid('album_art_', true) . '.' . $extension;
            $savePath = 'public/album_arts/' . $filename;
            Storage::disk('local')->put($savePath, $data);
            return Storage::url($savePath);
        }

        return null;
    }

    private function getAudioMetadataWithArt($path)
    {
        $getID3 = new getID3();
        $fileInfo = $getID3->analyze($path);
        $metadata = [
            'artist' => $fileInfo['tags']['id3v2']['artist'][0] ?? 'Unknown Artist',
            'title' => $fileInfo['tags']['id3v2']['title'][0] ?? 'Unknown Title',
            'album' => $fileInfo['tags']['id3v2']['album'][0] ?? 'Unknown Album',
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'bitrate' => $fileInfo['bitrate'] ?? 0,
        ];

        $albumArtUrl = $this->saveAlbumArt($path, $fileInfo);
        if ($albumArtUrl) {
            $metadata['albumArt'] = $albumArtUrl;
        }

        return $metadata;
    }
    private function getVideoMetadata($path)
    {
        $getID3 = new getID3();
        $fileInfo = $getID3->analyze($path);

        return [
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'resolution' => isset($fileInfo['video']['resolution_x'], $fileInfo['video']['resolution_y']) ? $fileInfo['video']['resolution_x'] . 'x' . $fileInfo['video']['resolution_y'] : 'Unknown',
            'frame_rate' => $fileInfo['video']['frame_rate'] ?? 'Unknown',
        ];
    }


    /* 
     * приклад в консолі ffmpeg -i input_video.mp4 -ss 00:00:01.000 -vframes 1 output_thumbnail.jpg
     */
    private function createVideoThumbnail($videoPath)
    {
        try {
            $ffmpeg = FFMpeg::create();
            $video = $ffmpeg->open($videoPath);
            // Визначаємо шлях збереження мініатюри
            $thumbnailPath = str_replace(pathinfo($videoPath, PATHINFO_EXTENSION), "jpg", $videoPath) . "_thumb.jpg";

            // Вибір кадру на 10-й секунді відео
            $frame = $video->frame(TimeCode::fromSeconds(10));
            $frame->save($thumbnailPath);
            // Повертаємо шлях до мініатюри
            return $thumbnailPath;
        } catch (\Exception $e) {
            \Log::error("Error creating video thumbnail: " . $e->getMessage());
            return null;
        }
    }

    protected function saveOptimizedImage($file)
    {
        $image = Image::make($file->getRealPath());
        $image->resize(800, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
        $path = 'images/' . $fileName;

        Storage::disk('public')->put($path, (string) $image->encode());

        return $path;
    }

}
