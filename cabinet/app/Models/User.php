<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function aboutMe()
    {
        return $this->hasOne(UserAdditionalData::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id');
    }

    public function following()
    {
        return $this->belongsToMany(User::class, 'friends', 'friend_id', 'user_id');
    }

    public function follow($users)
    {
        $this->following()->sync($users, false);
    }

    public function unfollow($users)
    {
        $this->following()->detach($users);
    }

     /**
     * Method для встановлення поліморфного звязку з UserFile.
     * 
     */
    public function userFile()
    {
        return $this->morphMany(Media::class, 'userfilable');
    }
    public function getUserProfileData()
    {
        return $this->select('id', 'name', 'last_name', 'profile_image_url')
            ->with('aboutMe')
            ->find(\Auth::id());
    }
    public function getFriendsAndFollowers()
    {
        $followingUsers = $this->following;
        $followersUsers = $this->followers;

        return [
            'following' => $followingUsers,
            'followingCount' => count($followingUsers),
            'followers' => $followersUsers,
            'followersCount' => count($followersUsers)
        ];
    }

    public static function getRandomUsersForFriendship($count = 10)
    {
        return self::select('id', 'name', 'last_name', 'profile_image_url')
            ->where('id', '!=', \Auth::id())
            ->whereDoesntHave('followers', function ($query) {
                $query->where('user_id', \Auth::id());
            })
            ->whereDoesntHave('following', function ($query) {
                $query->where('friend_id', \Auth::id());
            })
            ->where('status', 'activated')
            ->inRandomOrder()
            ->take($count)
            ->with('aboutMe')
            ->get();
    }
}
