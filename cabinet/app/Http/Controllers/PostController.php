<?php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {//
       // $path = $request->file('fileData')->store('video', 'post_videos');
     
        dd($_FILES, $request);
        if ($request->hasFile('fileData')) {
            $file = $request->file('fileData');
            $fileMimeType = $file->getMimeType();
         
            // Логіка для визначення типу медіа на основі MIME типу
        }
        
        $validatedData = $request->validate([
            //error 422
            'textData' => 'required|string',
            'selectedOption' => 'required|string',
            'fileData' => 'nullable|file|mimetypes:video/mp4,image/jpeg,image/png'
        ]);

        // Створення нового посту
        $post = new Post();
        $post->title = mb_substr($validatedData['textData'], 0, 20);
        // Використайте правильне поле
        $post->content = $validatedData['textData']; // Припускаючи, що 'content' це поле з текстом
        $post->visibility = $validatedData['selectedOption'] == 1 ? 'public' : 'private';
        $post->author_id = auth()->id(); // Автор посту
        $post->save();

        // Обробка файлу, якщо він існує
        if ($request->hasFile('fileData')) {
            $file = $request->file('fileData');
            $media = new Media(); 
            // Визначення типу файлу
            if (str_contains($file->getMimeType(), 'image')) {
                $path = $file->store('images', 'post_images');
                $media->type = 'image';
               
            } elseif (str_contains($file->getMimeType(), 'video')) {
                $path = $file->store('video', 'post_videos');
                $media->type = 'video';
            }

            // Зберігання даних про медіа
            $media->url = $path;
            $media->mediable_id = $post->id;
            $media->mediable_type = Post::class;
            $media->save();
        }

        return response()->json(['message' => 'Post created successfully']);
    }
}
