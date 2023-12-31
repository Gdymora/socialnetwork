<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id')->select('id', 'name', 'last_name', 'profile_image_url');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id');
    }
    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes', 'post_id', 'user_id');
    }

    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'post_id', 'friend_id')->select('id', 'name', 'last_name', 'birthdate', 'profile_image_url')->where('status', 'activated');
    }

    public function preview($text, $limit = 100, $end = '...')
    {
        return \Illuminate\Support\Str::limit($text, $limit, $end);
    }

}
