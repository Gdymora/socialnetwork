<?php
namespace App\Http\Controllers\Pages\Friends;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class FollowController extends Controller
{
    public function __invoke(Request $request, $userId): Response
    {
        try {
            $userToFollow = User::findOrFail($userId);
            $authUser = Auth::user();
            $authUser->follow($userToFollow->id);

            return response()->json(['message' => 'You successfully followed the user.']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'User not found.'], 404);
        } catch (\Exception $e) {
            dd($e);
            return response()->json(['message' => 'An error occurred. Please try again later.'], 500);
        }
    }
}
