<?php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;
use App\Services\LinkPreview;

class LinkPreviewController extends Controller
{
    public function show($url)
    {
        $linkPreview = new LinkPreview();
        $data = $linkPreview->getMetaData($url);

        return response()->json($data);
    }
}