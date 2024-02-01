<?php

namespace App\Http\Controllers\Pages\Friends;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class FriendsController extends Controller
{
    /* Display the dashboard page.
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $randomUsersForFriendship = User::getRandomUsersForFriendship();
        return Inertia::render('Friends', [
            'randomUsersForFriendship' => $randomUsersForFriendship
        ]);
    }
}
