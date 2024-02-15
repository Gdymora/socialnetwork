<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserFileController extends Controller
{
    public function store(Request $request)
    {
        \DB::beginTransaction();

        try {

            $validatedData = $request->validate([
                'titleData' => 'string',
                'descriptionData' => 'nullable|string',
                'selectedOption' => 'required|string',
                'fileData' => 'nullable|file'  // |mimetypes:video/mp4,image/jpeg,image/png,audio/mpeg,audio/mp3'              
            ]);
            $userfile = new UserFile();

            $userfile->description = $validatedData['descriptionData'];
            // Створення нового посту
            switch ($validatedData['selectedOption']) {
                case '1':
                    $userfile->visible = 'public';
                    break;
                case '2':
                    $userfile->visible = 'private';
                    break;
                case '3':
                    $userfile->visible = 'friends';
                    break;
                default:
                    $userfile->visible = 'private';
            }

            if ($request->hasFile('fileData')) {
                $file = $request->file('fileData');
                $userfile->title = $validatedData['titleData'] ? $validatedData['titleData'] : $file->getClientOriginalName();
                //TODO додати обробку по стисненню файлів
                $fileMimeType = $file->getMimeType();
                // Визначення типу медіа на основі MIME типу
                if (str_contains($fileMimeType, 'image')) {
                    $path = $file->store('images', 'usersfile_images');
                    $userfile->type = 'image';
                } elseif (str_contains($fileMimeType, 'video')) {
                    $path = $file->store('videos', 'usersfile_videos');
                    $userfile->type = 'video';
                } elseif (str_contains($fileMimeType, 'audio')) {
                    $path = $file->store('music', 'usersfile_music');
                    $userfile->type = 'music';
                } elseif (str_contains($fileMimeType, 'pdf')) {
                    $path = $file->store('pdf', 'usersfile_pdf');
                    $userfile->type = 'pdf';
                } elseif (str_contains($fileMimeType, 'doc') || str_contains($fileMimeType, 'docx')) {
                    $path = $file->store('doc', 'usersfile_doc');
                    $userfile->type = 'doc';
                } else {
                    $path = $file->store('other', 'usersfile_other');
                    $userfile->type = 'other';
                }

                if (!$path) {
                    throw new \Exception("Failed to store userfile file.");
                }

                $userfile->url = $path;
                $userfile->userfilable_id = auth()->id();
                $userfile->userfilable_type = User::class;
                $userfile->save();
            }

            \DB::commit(); // Завершення транзакції

            return response()->json(['message' => 'Post created successfully']);
        } catch (\Exception $e) {
            \DB::rollBack(); // Відкат транзакції у разі помилки
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function saveAlbumArt($path, $fileInfo)
    {
        if (isset($fileInfo['id3v2']['APIC'][0]['data'])) {
            $data = $fileInfo['id3v2']['APIC'][0]['data'];
            $mimeType = $fileInfo['id3v2']['APIC'][0]['mime'];
            $extension = explode('/', $mimeType)[1]; // Визначення розширення файлу з MIME типу
            // Створення імені файлу для зображення
            $filename = uniqid('album_art_', true) . '.' . $extension;
            $savePath = 'public/album_arts/' . $filename; // Вказівка шляху зберігання
            // Зберігання файлу
            Storage::disk('local')->put($savePath, $data);
            // Повернення URL до зображення
            return Storage::url($savePath);
        }

        return null;
    }
}