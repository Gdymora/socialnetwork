<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $user = User::select('id', 'name', 'last_name', 'profile_image_url')->with('aboutMe')->find(Auth::id());

        $posts = $this->showPostsForUser($user);
        $friendsForFriendship = $this->getFriendsForFriendship();
        $followingUsers = $user->following; // Користувачі, на яких він підписаний 
        $followersUsers = $user->followers; // Користувачі, які підписані на нього
        $postMostViewed = $this->postMostViewed();
        $follower = [
            'following' => $followingUsers,
            'followingCount' => count($followingUsers),
            'followers' => $followersUsers,
            'followersCount' => count($followersUsers)
        ];
        // dd($followers, count($followingUsers), $user->following);
        return view('dashboard', compact('posts', 'follower', 'user', 'friendsForFriendship', 'postMostViewed'));
    }

    public function showPostsForUser(User $user)
    {
        $posts = Post::where(function ($query) use ($user) {
            $query->where('visibility', 'public')
                ->orWhere(function ($subquery) {
                    $subquery->where('visibility', 'private')
                        ->where('author_id', Auth::id()); // Тільки автор може бачити приватні пости
                })
                /*  ->orWhere(function ($subquery) use ($user) {
                     $subquery->where('visibility', 'friends')
                         ->whereHas('friends', function ($friendQuery) use ($user) {
                             $friendQuery->where('friend_id', $user->id);
                         });
                 }) */
                /*    ->orWhere(function ($subquery) use ($user) {
                       $subquery->where('author_id', $user->id);
                   })
                   ->orWhere(function ($subquery) use ($user) {
                       $subquery->where('visibility', 'custom')
                           ->where('user_access', 'LIKE', '%"' . $user->id . '"%');
                   }) */;
        })->with(['comments', 'author'])
            ->get();
        // dd($posts[0]->comments[0]->authorComments);
        return $posts;
    }

    private function postMostViewed($count = 10)
    {
        //найбільше переглянуті
        $mostViewedPosts = Post::orderBy('viewed', 'desc')->take($count)->get();
        return $mostViewedPosts;
    }

    private function getFriendsForFriendship($count = 10)
    {
        $randomUsers = User::select('id', 'name', 'last_name', 'profile_image_url')->where('id', '!=', Auth::id())
            ->whereDoesntHave('followers', function ($query) {
                $query->where('user_id', Auth::id());
            })
            ->whereDoesntHave('following', function ($query) {
                $query->where('friend_id', Auth::id());
            })
            ->where('status', 'activated')
            ->inRandomOrder()
            ->take($count)
            ->with('aboutMe')
            ->get();
        return $randomUsers;
    }

    private function getUser()
    {
        $user = Auth::user();
        if ($user) {
            return $user->select('id', 'name', 'last_name', 'profile_image_url')->first();
        } else {
            return;
        }
    }


}
