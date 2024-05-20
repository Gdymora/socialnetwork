<?php
namespace App\Http\Controllers\Pages\UserHome;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use getID3;

class FileController extends Controller
{
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

    public function sendFileMimeType($type, $filename)
    {
        if (!in_array($type, ['image', 'video', 'music'])) {
            abort(404);
        }

        $filePath = "usersfile/{$type}/" . $filename;
        if (!Storage::disk('local')->exists($filePath)) {
            abort(404);
        }

        $absolutePath = Storage::disk('local')->path($filePath);
        $file = Storage::disk('local')->get($filePath);
        $fileType = Storage::disk('local')->mimeType($filePath);
        $response = response($file, 200)->header("Content-Type", $fileType);

        if ($type === 'music') {
            $metadata = $this->getAudioMetadata($absolutePath);
        } elseif ($type === 'video') {
            $metadata = $this->getVideoMetadata($absolutePath);
        } elseif ($type === 'image') {
            return $response;
        }

        // Додавання метаданих у заголовки відповіді для аудіо та відео
        if (isset($metadata)) {
            foreach ($metadata as $key => $value) {
                $response->header("X-Metadata-$key", $value);
            }
        }

        return $response;
    }

    private function getAudioMetadata($path)
    {
        $getID3 = new getID3;
        $fileInfo = $getID3->analyze($path);

        return [
            'artist' => $fileInfo['tags']['id3v2']['artist'][0] ?? 'Unknown Artist',
            'title' => $fileInfo['tags']['id3v2']['title'][0] ?? 'Unknown Title',
            'album' => $fileInfo['tags']['id3v2']['album'][0] ?? 'Unknown Album',
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'bitrate' => $fileInfo['bitrate'] ?? 0,
        ];
    }

    private function getVideoMetadata($path)
    {
        $getID3 = new getID3;
        $fileInfo = $getID3->analyze($path);

        // Припустимо, що ми хочемо отримати тривалість і роздільну здатність
        return [
            'duration' => $fileInfo['playtime_seconds'] ?? 0,
            'resolution' => isset($fileInfo['video']['resolution_x'], $fileInfo['video']['resolution_y']) ? $fileInfo['video']['resolution_x'] . 'x' . $fileInfo['video']['resolution_y'] : 'Unknown',
            'frame_rate' => $fileInfo['video']['frame_rate'] ?? 'Unknown',
        ];
    }

}
