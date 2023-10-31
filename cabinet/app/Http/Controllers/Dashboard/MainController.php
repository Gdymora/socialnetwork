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
        $user = Auth::user();
        $posts = $this->showPostsForUser($user);
        // $user = User::find(1); // Знайдіть поточного користувача
        $followingUsers = $user->following; // Користувачі, на яких він підписаний 
        $followers = $user->followers; // Користувачі, які підписані на нього
       // dd($followers, count($followingUsers), $user->following);
        return view('dashboard', compact('posts'));
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
        return $posts;
    }


}
