<?php
namespace App\Http\Controllers\System;
use App\Http\Controllers\Controller;
use App\Services\FileFotoService;

class FileFotoController extends Controller
{
    protected $fileService;

    public function __construct(FileFotoService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function show($filename, FileFotoService $fileService)
    {
        return $fileService->showFile($filename);
    }

    public function upload(Request $request)
    {
        $file = $request->file('file');
        $content = file_get_contents($file->getRealPath());
        $this->fileService->saveFile('path/to/file.txt', $content);

        // ...
    }

    public function download($filename)
    {
        $fileContent = $this->fileService->getFile('path/to/' . $filename);

        if ($fileContent) {
            return response($fileContent, 200)
                ->header('Content-Type', 'application/octet-stream')
                ->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
        }

        return response('File not found', 404);
    }
}
