<?php

namespace App\Http\Controllers\Pages\UserHome;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class UserHomeController extends Controller
{
    /* Display the dashboard page.
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $user = Auth::user();
        $profileData = $user->getUserProfileData();
        $friendsAndFollowers = $user->getFriendsAndFollowers();
        $posts = Post::getPostsUser($user);
       /*  dd([
            'posts' => $posts,
            'friendsAndFollowers' => $friendsAndFollowers,
            'profileData' => $profileData,
        ]); */
        return Inertia::render('UserHome', [
            'posts' => $posts,
            'friendsAndFollowers' => $friendsAndFollowers,
            'profileData' => $profileData,
        ]);

        //return view('dashboard', compact('posts', 'friendsAndFollowers', 'profileData', 'postMostViewed', 'randomUsersForFriendship'));
    }

}
