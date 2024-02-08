<?php
namespace App\Http\Controllers;

use App\Models\UserAdditionalData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAboutMeController extends Controller
{
    public function update(Request $request)
    {

        $validatedData = $request->validate([
            'education' => 'nullable|string',
            'birthplace' => 'nullable|string',
            'hobbies' => 'nullable|string',
            'occupations' => 'nullable|string',
            'profile_image_url' => 'nullable|string'
        ]);

        $user = Auth::user();
        // Оновлення або створення даних UserAdditionalData
        $userAdditionalData = $user->aboutMe;
        if (!$userAdditionalData) {
            $userAdditionalData = new UserAdditionalData();
            $userAdditionalData->user_id = $user->id;
        }
        //dd($userAdditionalData );
        $userAdditionalData->education = $validatedData['education'] ?? $userAdditionalData->education;
        $userAdditionalData->birthplace = $validatedData['birthplace'] ?? $userAdditionalData->birthplace;
        $userAdditionalData->hobbies = $validatedData['hobbies'] ?? $userAdditionalData->hobbies;
        $userAdditionalData->occupations = $validatedData['occupations'] ?? $userAdditionalData->occupations; 
        $userAdditionalData->save();

        // Оновлення profile_image_url, якщо воно присутнє
        if (!empty($validatedData['profile_image_url'])) {
            $user->profile_image_url = $validatedData['profile_image_url'];
            $user->save();
        }

        return response()->json(['message' => 'Profile updated successfully']);
    }
}