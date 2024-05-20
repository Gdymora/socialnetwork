<?php
namespace App\Http\Controllers;

use App\Models\UserFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserFileController extends Controller
{
    /* 
    composer require intervention/image
    дозволяє легко змінювати розміри, виконувати стиснення та інші трансформації зображень.
    composer require spatie/laravel-image-optimizer
    дозволяє автоматично оптимізувати зображення під час завантаження.

     */
    public function index()
    {
        $userFiles = UserFile::all();
        return response()->json($userFiles, 200);
    }
    public function sendFile($type, $filename)
    {
        if (!in_array($type, ['image', 'video', 'music'])) {
            abort(404);
        }

        $filePath = "usersfile/{$type}/" . $filename;
        if (!Storage::disk('local')->exists($filePath)) {
            abort(404);
        }

        $file = Storage::disk('local')->get($filePath);
        $response = response($file, 200);
        return $response;
    }
    public function show($id)
    {
        $userFile = UserFile::findOrFail($id);
        return response()->json($userFile, 200);
    }

    public function view($id)
    {
        return $this->show($id); // reuse show method as view is duplicating the same functionality
    }

    public function store(Request $request)
    {
        \DB::beginTransaction();
        try {
            $validatedData = $request->validate([
                'titleData' => 'nullable|string',
                'descriptionData' => 'nullable|string',
                'selectedOption' => 'required|string',
                'fileData' => 'nullable|file'
            ]);

            $index = 0;
            while ($request->hasFile("fileData{$index}")) {
                $file = $request->file("fileData{$index}");
                UserFile::storeFile($file, $validatedData);
                $index++;
            }

            \DB::commit();
            return response()->json(['message' => 'Files uploaded successfully'], 200);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function destroy($id)
    {
        \DB::beginTransaction();
        try {
            $userFile = UserFile::findOrFail($id);
            // Перевірка прав доступу до видалення
            if ($userFile->userfilable_id !== auth()->id()) {
                return response()->json(['error' => 'Forbidden'], 403);
            }
            Storage::disk("usersfile_{$userFile->type}")->delete($userFile->url);
            $userFile->delete();
            \DB::commit();
            return response()->json(['message' => 'File deleted successfully'], 200);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function delete(Request $request)
    {
        \DB::beginTransaction();
        try {
            $requestids = $request->input('ids');
            $ids = is_array($requestids) ? $requestids : [$requestids]; // Перетворюємо на масив, якщо передано одиночний ідентифікатор
            $userFiles = UserFile::findMany($ids);

            foreach ($userFiles as $userFile) {
                Storage::disk("usersfile_{$userFile->type}")->delete($userFile->url);
                $userFile->delete();
            }

            \DB::commit();
            return response()->json(['message' => 'Files deleted successfully'], 200);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}