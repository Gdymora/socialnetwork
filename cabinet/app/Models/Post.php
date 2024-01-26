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
    /* Привязка автора до коментара поста */
    public function getPostsWithComments()
    {
        return self::with(['comments.authorComments'])->get();
    }

    /**
     * Method для встановлення поліморфного звязку з Media.
     * 
     */
    public function media()
    {
        return $this->morphMany(Media::class, 'mediable');
    }

    /**
     * Method для встановлення поліморфного звязку з Link.
     * 
     */
    public function links()
    {
        return $this->morphMany(Link::Class, 'linkable');
    }

    /**
     * Method to get posts for a specific user based on visibility.
     *
     * @param User $user
     * @return Collection
     */
    public static function getPostsForUser(User $user)
    {
        return self::where(function ($query) use ($user) {
            $query->where('visibility', 'public')
                ->orWhere(function ($subquery) use ($user) {
                    $subquery->where('visibility', 'private')
                        ->where('author_id', $user->id); // Only author can see private posts
                })
                ->orWhere(function ($subquery) use ($user) {
                    $subquery->where('visibility', 'friends')
                        ->whereHas('author.following', function ($friendQuery) use ($user) {
                            $friendQuery->where('friends.friend_id', $user->id);
                        });
                })
                ->orWhere(function ($subquery) use ($user) {
                    $subquery->where('author_id', $user->id); // User can see their own posts
                })
                ->orWhere(function ($subquery) use ($user) {
                    $subquery->where('visibility', 'custom')
                        ->where('user_access', 'LIKE', '%"' . $user->id . '"%');
                });
        })
            ->with(['comments.authorComments', 'author', 'media', 'links']) // додано вкладення
            ->get();
    }


    public static function getMostViewedPosts($count = 10)
    {
        return self::orderBy('viewed', 'desc')->take($count)->get();
    }

}
