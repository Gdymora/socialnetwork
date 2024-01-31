<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Friend extends Model
{
    protected $fillable = ['user_id', 'friend_id'];

    public static function addFriend($userId, $friendId)
    {
        // Перевірка на існування запису про дружбу перед додаванням
        $now = Carbon::now();
        self::firstOrCreate(
            [
                'user_id' => $userId,
                'friend_id' => $friendId,
            ],
            [
                'created_at' => $now
            ]
        );
    }

    public static function removeFriend($userId, $friendId)
    {
        // Видалення друга
        self::where('user_id', $userId)
            ->where('friend_id', $friendId)
            ->delete();
    }
}
