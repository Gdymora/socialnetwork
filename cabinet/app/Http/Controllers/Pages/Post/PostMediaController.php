<?php
namespace App\Http\Controllers\Pages\Post;

use App\Http\Controllers\Controller;
use App\Models\Link;
use App\Models\Media;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
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

    public function storeOld(Request $request)
    {
        // Отримання даних з запиту
        $linkDataJson = $request->input('linkData');
        $linkData = json_decode($linkDataJson, true);
        // return response()->json(['errors' => $request->all()], 500);
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

    public function store(Request $request)
    {
        // Отримання даних з запиту
        $linkDataJson = $request->input('linkData');
        $linkData = json_decode($linkDataJson, true);
        // return response()->json(['errors' => $request->all()], 500);
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
                'selectedOption' => 'required|string',/* 
'fileData' => 'nullable|file|mimetypes:video/mp4,image/jpeg,image/png,image/webp' */
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
            if ($request->hasFile('fileData0')) {
                $files = [];
                $index = 0;

                while ($request->hasFile("fileData{$index}")) {
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

                    $files[] = $media;

                    $index++;
                }
            }

            \DB::commit();

            return response()->json(['message' => 'Post created successfully']);
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

        // dd($linkDataJson, $linkData);
        // Перевірка декодованого JSON
        return response()->json(['errors' => $request->all()], 500);
        if ($linkData === null && json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON'], 422);
        }

        if ($request->hasFile('fileData')) {
            $file = $request->file('fileData');
            $fileMimeType = $file->getMimeType();
            // Логіка для визначення типу медіа на основі MIME типу
        }
        $requestData = $request->getContent();
        // Парсинг форми

        $formData = $this->parseFormData($requestData);
        // Валідація даних
        $validator = Validator::make($formData, [
            'textData' => 'required|string',
            'linkData' => 'required|string',
            'selectedOption' => 'required|in:1,2',
        ]);
        // Перевірка на наявність помилок валідації
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $post = Post::with(['media', 'links'])->findOrFail($id);
        // Перевірка прав доступу до редагування
        if ($post->author_id !== auth()->id()) {
            return response()->json(['error' => 'Forbidden'], 403);
        }


        $linkDataJson = $formData['linkData'];

        $linkData = json_decode($linkDataJson, true);

        if ($linkData === null && json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON'], 422);
        }



        if ($linkData) {
            $link = Link::findOrFail($post->links[0]->id);
            //  return response()->json(['message' => $linkData], 500);
            // Перевірка прав доступу до редагування
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

        \DB::beginTransaction();

        try {
            $post->title = mb_substr($formData['textData'], 0, 20);
            $post->content = $formData['textData'];
            $post->visibility = $formData['selectedOption'] == 1 ? 'public' : 'private';
            $post->author_id = auth()->id();
            $post->save();
            return response()->json(['error' => $formData], 500);
            if (isset($formData['fileData']) && is_array($formData['fileData'])) {
                foreach ($formData['fileData'] as $fileName => $uploadedFile) {
                    // Отримуємо бінарні дані файлу з UploadedFile

                    $fileContent = file_get_contents($uploadedFile->getPathname());

                    // Створюємо тимчасовий файл з бінарними даними
                    $tmpFilePath = tempnam(sys_get_temp_dir(), 'uploaded_file_');
                    file_put_contents($tmpFilePath, $fileContent);

                    // Створюємо екземпляр UploadedFile
                    $uploadedFile = new UploadedFile($tmpFilePath, $fileName, null, null, true);

                    $media = new Media();

                    if (str_contains($uploadedFile->getMimeType(), 'image')) {
                        $path = $uploadedFile->store('images', 'post_images');
                        $media->type = 'image';
                    } elseif (str_contains($uploadedFile->getMimeType(), 'video')) {
                        $path = $uploadedFile->store('videos', 'post_videos');
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
            }

            \DB::commit();

            return response()->json(['message' => 'Post updated successfully']);
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
            $post->media()->delete();

            // Видалення поста
            $post->delete();

            \DB::commit();

            return response()->json(['message' => 'Post deleted successfully']);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function parseFormData($requestData)
    {
        // Розбиття тіла запиту на окремі частини
        $parts = explode("------WebKitFormBoundary", $requestData);

        // Ініціалізація змінних для даних
        $textData = $linkData = $selectedOption = null;
        $fileData = new FileBag();

        // Перебір частин тіла запиту
        foreach ($parts as $part) {
            // Якщо частина містить дані textData
            if (strpos($part, 'name="textData"') !== false) {
                preg_match('/\r\n\r\n(.*?)\r\n/', $part, $matches);
                $textData = $matches[1];
            }
            // Якщо частина містить дані linkData
            elseif (strpos($part, 'name="linkData"') !== false) {
                preg_match('/\r\n\r\n(.*?)\r\n/', $part, $matches);
                $linkData = $matches[1];
            }
            // Якщо частина містить дані selectedOption
            elseif (strpos($part, 'name="selectedOption"') !== false) {
                preg_match('/\r\n\r\n(.*?)\r\n/', $part, $matches);
                $selectedOption = $matches[1];
            }
            // Якщо частина містить файли
            elseif (strpos($part, 'fileData') !== false) {
                // Отримуємо ім'я файлу
                preg_match('/name="(.*?)"/', $part, $matchesFileName);
                $fileName = isset($matchesFileName[1]) ? $matchesFileName[1] : null;
                // Отримуємо бінарні дані файлу
                $fileContent = substr($part, strpos($part, "\r\n\r\n") + 4); // Отримуємо після першого \r\n\r\n 
                // Створюємо UploadedFile
                $fileContent = isset($matches[1]) ? $matches[1] : null; // Отримуємо після першого \r\n\r\n

                // Створюємо UploadedFile
                if ($fileName && $fileContent) {
                    // Розкодовуємо бінарні дані
                    $decodedFileContent = base64_decode($fileContent);

                    // Створюємо тимчасовий файл та записуємо в нього розкодовані дані
                    $tmpFilePath = tempnam(sys_get_temp_dir(), 'uploaded_file_');
                    file_put_contents($tmpFilePath, $decodedFileContent);

                    // Створюємо UploadedFile
                    $uploadedFile = new UploadedFile($tmpFilePath, $fileName, null, null, true);
                    $fileData->set($fileName, $uploadedFile);
                }
            }
        }

        return [
            'textData' => $textData,
            'linkData' => $linkData,
            'selectedOption' => $selectedOption,
            'fileData' => $fileData
        ];
    }

}