<?php
namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\Media;
use App\Models\Post;
use Illuminate\Http\Request;

class PostMediaController extends Controller
{
    public function store(Request $request)
    {
        // Отримання даних з запиту
        $linkDataJson = $request->input('linkData');
        $linkData = json_decode($linkDataJson, true);

        // dd($linkDataJson, $linkData);
        // Перевірка декодованого JSON
        if ($linkData === null && json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON'], 422);
        }

        if ($request->hasFile('fileData')) {
            $file = $request->file('fileData');
            $fileMimeType = $file->getMimeType();
            // Логіка для визначення типу медіа на основі MIME типу
        }

        \DB::beginTransaction();

        try {
            $validatedData = $request->validate([
                'textData' => 'required|string',
                'selectedOption' => 'required|string',
                'fileData' => 'nullable|file|mimetypes:video/mp4,image/jpeg,image/png,image/webp'
            ]);

            // Створення нового посту
            $post = new Post();
            $post->title = mb_substr($validatedData['textData'], 0, 20);
            $post->content = $validatedData['textData'];
            $post->visibility = $validatedData['selectedOption'] == 1 ? 'public' : 'private';
            $post->author_id = auth()->id();
            $post->save();

            if ($linkData) {
                $link = new Link();
                $link->title = $linkData['title'];
                $link->description = $linkData['description'];
                $link->image = $linkData['image'];
                $link->site_name = $linkData['site_name'] ? $linkData['site_name'] : $linkData['title'];
                $link->url = $linkData['url'];
                $link->linkable_id = $post->id;
                $link->linkable_type = Post::class;
                $link->save();
            }

            if ($request->hasFile('fileData')) {
                $file = $request->file('fileData');
                $media = new Media();
                //TODO додати обробку по стисненню файлів
                if (str_contains($file->getMimeType(), 'image')) {
                    $path = $file->store('images', 'post_images');
                    $media->type = 'image';
                } elseif (str_contains($file->getMimeType(), 'video')) {
                    $path = $file->store('videos', 'post_videos');
                    $media->type = 'video';
                }

                if (!$path) {
                    throw new \Exception("Failed to store media file.");
                }

                $media->url = $path;
                $media->mediable_id = $post->id;
                $media->mediable_type = Post::class;
                $media->save();
            }

            \DB::commit(); // Завершення транзакції

            return response()->json(['message' => 'Post created successfully']);
        } catch (\Exception $e) {
            \DB::rollBack(); // Відкат транзакції у разі помилки
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}