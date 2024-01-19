<?php
namespace App\Contracts;

interface FileServiceInterface
{
    public function saveFile($path, $content);

    public function getFile($path);

    public function getFileUrl($filename);

    public function createDirectory($path);

    public function showFile($filename);

    public function downloadFile($filename);
}
