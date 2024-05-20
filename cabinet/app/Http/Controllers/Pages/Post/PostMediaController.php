<?php
namespace App\Http\Controllers\Pages\Post;

use App\Http\Controllers\Controller;
use App\Models\Link;
use App\Models\Media;
use App\Models\Post;
use App\Models\UserFile;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\FileBag;

class PostMediaController extends Controller
{

    public function index()
    {
        // Отримати всі дані з таблиці
        $posts = Post::all();
        return response()->json($posts);
    }

    public function show($id)
    {
        // Find the user table by id
        $post = Post::findOrFail($id);
        //return response()->json($post);
        return Inertia::render('Post', [
            'post' => $post
        ]);
    }

    public function store(Request $request)
    {
        $linkDataJson = $request->input('linkData');
        $linkData = json_decode($linkDataJson, true);

        if ($linkData === null && json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON'], 422);
        }
        if ($request->hasFile('fileData')) {
            $file = $request->file('fileData');
            $fileMimeType = $file->getMimeType();
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
            // Отримуємо файли
            $index = 0;
            while ($request->hasFile("fileData{$index}")) {
                $file = $request->file("fileData{$index}");
                Media::storeFile($file, $post->id);
                $index++;
            }
            /*  if ($request->hasFile('fileData0')) {
                 $index = 0;
                 $filesLimit = 5; // Обмеження на кількість файлів
                 while ($request->hasFile("fileData{$index}") && $index < $filesLimit) {
                     $file = $request->file("fileData{$index}");

                     $media = new Media();

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
                     $index++;
                 }
             } */
           
             \DB::commit();
            $postNew = Post::getOnePostsUser(auth()->id(), $post->id);
            return response()->json(['message' => 'Post created successfully', 'post' => $postNew]);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        // Отримання даних з запиту
        $linkDataJson = $request->input('linkData');
        $linkData = json_decode($linkDataJson, true);

        if ($linkData === null && json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON'], 422);
        }

        \DB::beginTransaction();

        try {
            $validatedData = $request->validate([
                'textData' => 'required|string',
                'selectedOption' => 'required|string',
                'fileData' => 'nullable|file|mimetypes:video/mp4,image/jpeg,image/png,image/webp'
            ]);

            $post = Post::with(['media', 'links'])->findOrFail($id);
            if ($post->author_id !== auth()->id()) {
                return response()->json(['error' => 'Forbidden'], 403);
            }
            $post->title = mb_substr($validatedData['textData'], 0, 20);
            $post->content = $validatedData['textData'];
            $post->visibility = $validatedData['selectedOption'] == 1 ? 'public' : 'private';
            $post->author_id = auth()->id();
            $post->save();

            if ($linkData) {
                $link = Link::findOrFail($post->links[0]->id);
                if ($post->author_id !== auth()->id()) {
                    return response()->json(['error' => 'Forbidden'], 403);
                }
                if ($post->links[0]->linkable_id !== $link->linkable_id) {
                    return response()->json(['error' => 'Forbidden linkable_id'], 403);
                }
                $link->title = $linkData['title'];
                $link->description = $linkData['description'];
                $link->image = $linkData['image'];
                $link->site_name = $linkData['site_name'] ? $linkData['site_name'] : $linkData['title'];
                $link->url = $linkData['url'];
                $link->linkable_id = $post->id;
                $link->linkable_type = Post::class;
                $link->save();
            }

            \DB::commit();
            $postNew = Post::getOnePostsUser(auth()->id(), $post->id);
            return response()->json(['message' => 'Post updated successfully', 'post' => $postNew]);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        // Перевірка прав доступу до видалення
        if ($post->author_id !== auth()->id()) {
            return response()->json(['error' => 'Forbidden'], 403);
        }

        \DB::beginTransaction();

        try {
            // Видалення коментарів
            $post->comments()->delete();

            // Видалення файлів
            foreach ($post->media as $media) {
                Storage::disk("post_{$media->type}")->delete($media->url);
                $media->delete();
            }

            // Видалення поста
            $post->delete();
            \DB::commit();

            return response()->json(['message' => 'Post deleted successfully']);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}