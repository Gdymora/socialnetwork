<?php

namespace App\Http\Controllers\Pages\Friends;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class ProfileFriendController extends Controller
{
    /* Display the dashboard page.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request, $id): Response
    {
        $userId = $id; 
        $user = User::find($userId);

        if (!$user) {
            abort(404);
        }
        $authUser = Auth::user();

        $profileData = $user->getUserProfileData();

        if ($user->is_private && !$user->friends()->where('friend_id', $authUser->id)->exists()) {
            // Якщо профіль приватний і користувач не є другом
            return Inertia::render('ProfileFriend', [
                'profileData' => $profileData,
            ]);
        }

        $friendsAndFollowers = $user->getFriendsAndFollowers();
        $posts = Post::getPostsUser($user);
        $userFile['private'] = $user->getFilesFilteredByVisibility('private');
        $userFile['public'] = $user->getFilesFilteredByVisibility('public');
        $userFile['friends'] = $user->getFilesFilteredByVisibility('friends');

        return Inertia::render('ProfileFriend', [
            'userFile' => $userFile,
            'posts' => $posts,
            'friendsAndFollowers' => $friendsAndFollowers,
            'profileData' => $profileData,
        ]);
    }


}
