<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'type', 'mediable_id', 'mediable_type'];

    public function mediable()
    {
        return $this->morphTo();
    }

    public static function storeFile($file, $postId)
    {
        $type = self::determineFileType($file->getMimeType());

        $mediafile = new self([
            'mediable_id' => $postId,
            'mediable_type' => Post::class,
            'type' => $type
        ]);
        $path = $file->store($type, "post_{$type}");
        if (!$path) {
            throw new \Exception("Failed to store file.");
        }

        // Оптимізація файлу за необхідності
       // self::optimizeFile($path, $mediafile);

        $mediafile->url = $path;
        $mediafile->save();

        return $mediafile;
    }

    private static function determineFileType($mimeType)
    {
        if (str_contains($mimeType, 'image'))
            return 'image';
        if (str_contains($mimeType, 'video'))
            return 'video';
    }

    

}