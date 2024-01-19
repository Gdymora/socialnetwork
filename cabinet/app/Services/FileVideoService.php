<?php
namespace App\Services;

use App\Contracts\FileServiceInterface;
use Illuminate\Support\Facades\Storage;

class FileVideoService implements FileServiceInterface
{
    protected $disk;

    public function __construct()
    {
        $this->disk = Storage::disk('video'); // 'video' - це ваш диск, визначений у config/filesystems.php
    }

    public function saveFile($path, $content)
    {
        $this->disk->put($path, $content);
        // Зберігання фото Storage::disk('video')->put('example.jpg', $content);
    }

    public function getFile($path)
    {
        return $this->disk->exists($path) ? $this->disk->get($path) : null;

    }
    public function getFileUrl($filename)
    {
        return $this->disk->exists($filename) ? asset("usersfile/video/{$filename}") : null;
    }

    public function createDirectory($path)
    {
        $this->disk->makeDirectory($path);
    }

    public function showFile($filename)
    {        

        if ($this->disk->exists($filename)) {
            $file = $this->disk->get($filename);
            $type = $this->disk->mimeType($filename);

            return response($file, 200)->header('Content-Type', $type);
        }

        return response()->json(['error' => 'File not found.'], 404);
    }

    public function downloadFile($filename)
    {
        if ($this->disk->exists($filename)) {
            return response()->download($this->disk->path($filename));
        }

        return response()->json(['error' => 'File not found.'], 404);
    }

}
