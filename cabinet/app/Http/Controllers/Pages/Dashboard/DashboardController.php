<?php

namespace App\Http\Controllers\Pages\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
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
        $posts = Post::getPostsForUser($user);
        $postMostViewed = Post::getMostViewedPosts();
        $randomUsersForFriendship = User::getRandomUsersForFriendship();
        return Inertia::render('Dashboard', [
            'posts' => $posts,
            'friendsAndFollowers' => $friendsAndFollowers,
            'profileData' => $profileData,
            'postMostViewed' => $postMostViewed,
            'randomUsersForFriendship' => $randomUsersForFriendship
        ]);
    }

}
