<?php
namespace App\Http\Controllers\Pages\UserHome;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use getID3;

class FileController extends Controller
{
    public function sendFile($type, $filename)
    {
        if (!in_array($type, ['images', 'videos', 'music'])) {
            abort(404);
        }

        $filePath = "usersfile/{$type}/" . $filename;
        if (!Storage::disk('local')->exists($filePath)) {
            abort(404);
        }

        $absolutePath = Storage::disk('local')->path($filePath);
        $file = Storage::disk('local')->get($filePath);
        $fileType = Storage::disk('local')->mimeType($filePath);

        $response = response($file, 200)->header("Content-Type", $fileType);

        if ($type === 'music') {
            $metadata = $this->getAudioMetadata($absolutePath);
        } elseif ($type === 'videos') {
            $metadata = $this->getVideoMetadata($absolutePath);
        } elseif ($type === 'images') {
            return $response;
        }

        // Додавання метаданих у заголовки відповіді для аудіо та відео
        if (isset($metadata)) {
            foreach ($metadata as $key => $value) {
                $response->header("X-Metadata-$key", $value);
            }
        }

        return $response;
    }

    private function getAudioMetadata($path)
    {
        $getID3 = new getID3;
        $fileInfo = $getID3->analyze($path);

        return [
            'artist' => $fileInfo['tags']['id3v2']['artist'][0] ?? 'Unknown Artist',
            'title' => $fileInfo['tags']['id3v2']['title'][0] ?? 'Unknown Title',
            'album' => $fileInfo['tags']['id3v2']['album'][0] ?? 'Unknown Album',
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'bitrate' => $fileInfo['bitrate'] ?? 0,
        ];
    }

    private function getAudioMetadataWithArt($path)
    {
        $getID3 = new getID3;
        $fileInfo = $getID3->analyze($path);

        $metadata = [
            'artist' => $fileInfo['tags']['id3v2']['artist'][0] ?? 'Unknown Artist',
            'title' => $fileInfo['tags']['id3v2']['title'][0] ?? 'Unknown Title',
            'album' => $fileInfo['tags']['id3v2']['album'][0] ?? 'Unknown Album',
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'bitrate' => $fileInfo['bitrate'] ?? 0,
        ];

        // Збереження обкладинки альбому і отримання її URL
        $albumArtUrl = $this->saveAlbumArt($path, $fileInfo);
        if ($albumArtUrl) {
            $metadata['albumArt'] = $albumArtUrl;
        }

        return $metadata;
    }

    private function getVideoMetadata($path)
    {
        $getID3 = new getID3;
        $fileInfo = $getID3->analyze($path);

        // Припустимо, що ми хочемо отримати тривалість і роздільну здатність
        return [
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'resolution' => isset($fileInfo['video']['resolution_x'], $fileInfo['video']['resolution_y']) ? $fileInfo['video']['resolution_x'] . 'x' . $fileInfo['video']['resolution_y'] : 'Unknown',
            'frame_rate' => $fileInfo['video']['frame_rate'] ?? 'Unknown',
        ];
    }

    // TODO додати FFMpeg
    /* 
    приклад в консолі ffmpeg -i input_video.mp4 -ss 00:00:01.000 -vframes 1 output_thumbnail.jpg

    // Встановлення за допомогою Composer
    composer require php-ffmpeg/php-ffmpeg
    Приклад коду з PHP-FFMpeg
    php
    Copy code
    use FFMpeg\FFMpeg;

    $ffmpeg = FFMpeg::create();
    $video = $ffmpeg->open('path/to/video.mp4');
    $frame = $video->frame(FFMpeg\Coordinate\TimeCode::fromSeconds(10));
    $frame->save('path/to/frame.jpg');
    Цей код відкриває відеофайл, вибирає кадр на 10-й секунді і зберігає його як зображення.
     */

}
