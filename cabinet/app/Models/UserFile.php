<?php

namespace App\Models;

use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use FFMpeg\Coordinate\TimeCode;
use Illuminate\Support\Facades\Storage;

class UserFile extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'title', 'description', 'visible', 'type', 'userfilable_type', 'userfilable_id'];
    public function userfilable()
    {
        return $this->morphTo();
    }
    /**
     * Отримати метадані для медіа.
     */
    public function meta()
    {
        return $this->hasMany(UserFileMeta::class);
    }

    public static function storeFile($file, $validatedData)
    {
        $type = self::determineFileType($file->getMimeType());

        switch ($validatedData['selectedOption']) {
            case '1':
                $visible = 'public';
                break;
            case '2':
                $visible = 'private';
                break;
            case '3':
                $visible = 'friends';
                break;
            default:
                $visible = 'private';
        }
        $userfile = new self([
            'title' => $validatedData['titleData'] ?: $file->getClientOriginalName(),
            'visible' => $visible,
            'userfilable_id' => auth()->id(),
            'userfilable_type' => User::class,
            'type' => $type
        ]); 
        $path = $file->store($type, "usersfile_{$type}");
        if (!$path) {
            throw new \Exception("Failed to store file.");
        }

        // Оптимізація файлу за необхідності
        self::optimizeFile($path, $userfile);

        $userfile->url = $path;//Storage::url($path);
        $userfile->save();

        return $userfile;
    }

    private static function deleteFile($file)
    {
        Storage::disk("usersfile_{$file->type}")->delete($file->url);
    }

    private static function optimizeFile($path, $userfile)
    {
        if (str_contains($userfile->type, 'image')) {
            // self::optimizeImage($path);
        } elseif (str_contains($userfile->type, 'video')) {
            // self::optimizeVideo(storage_path($path), $userfile);
        }
    }

    private static function optimizeImage($path)
    {
        $manager = new ImageManager(Driver::class);
        $image = $manager->read(storage_path($path));
        $encoded = $image->toWebp(60); // Intervention\Image\EncodedImage
        $image->save(storage_path($encoded));
    }

    private static function optimizeVideo($path, $userfile)
    {
        $ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($path);

        // Отримання тривалості відео в секундах
        $ffprobe = FFProbe::create();
        $duration = $ffprobe->format($path)->get('duration');

        // Обчислення кроку для створення тамбнейлів
        $step = $duration / 10;
        $thumbnails = [];

        for ($i = 1; $i <= 10; $i++) {
            $framePath = 'thumbnails/' . uniqid() . ".jpg";
            $timeCode = TimeCode::fromSeconds($step * $i);
            $video->frame($timeCode)->save(storage_path("app/public/{$framePath}"));

            $thumbnails[] = new UserFile([
                'url' => $framePath,
                'title' => $userfile->title . ' Thumbnail ' . $i,
                'visible' => $userfile->visible,
                'type' => 'image',
                'userfilable_type' => $userfile->userfilable_type,
                'userfilable_id' => $userfile->userfilable_id,
                'description' => 'Thumbnail at ' . $timeCode->toSeconds() . ' seconds',
            ]);

            $thumbnails[$i - 1]->save(); // Збереження тамбнейлу в базу даних
        }

        // Збереження відео у зменшеному розмірі
        $video->filters()->resize(new Dimension(640, 480))->synchronize();
        $video->save(new X264('aac'), $path);  // Збереження відео з використанням кодека X264

        // Оновлення оригінального файлу, якщо потрібно
        $userfile->save();
    }

    private static function determineFileType($mimeType)
    {
        if (str_contains($mimeType, 'image'))
            return 'image';
        if (str_contains($mimeType, 'video'))
            return 'video';
        if (str_contains($mimeType, 'audio'))
            return 'music';
        if (str_contains($mimeType, 'pdf'))
            return 'pdf';
        if (str_contains($mimeType, 'doc') || str_contains($mimeType, 'docx'))
            return 'doc';
        return 'other';
    }

    /* додано слухача на подію видалення, який відповідатиме за видалення пов'язаних файлів
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($userFile) {
            if ($userFile->type === 'video') {
                // Знайти всі тамбнейли, пов'язані з відео
                $thumbnails = UserFile::where('userfilable_id', $userFile->id)
                    ->where('userfilable_type', UserFile::class)
                    ->where('type', 'image')
                    ->get();

                // Видалити тамбнейли з файлової системи і бази даних
                foreach ($thumbnails as $thumbnail) {
                    Storage::delete($thumbnail->url);
                    $thumbnail->delete();
                }
            }
        });
    }
}