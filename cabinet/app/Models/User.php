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

    public function follow($friendId)
    {
       // $this->followers()->attach($friendId);
       Friend::addFriend($this->id, $friendId);
    }

    public function unfollow($friendId)
    {
       // $this->followers()->detach($friendId);
       Friend::removeFriend($this->id, $friendId);
    }
    
    public function isFriend($userId)
    {
        //перевірити чи є друзями
        return $this->friends()->where('id', $userId)->exists();
    }
    /**
     * Method для встановлення поліморфного звязку з UserFile.
     * 
     */
    public function userFile()
    {
        return $this->morphMany(UserFile::class, 'userfilable');
    }

    /**
     * Отримує усі файли користувача
     * @return \Illuminate\Database\Eloquent\Collection Колекція отриманих файлів.
     */
    public function getUserFileAll()
    {
        return $this->userFile()->get();
    }

    /**
     * Отримує усі файли користувача за видимістю.
     *
     * @param  string|null $visibility Рівень видимості файлу ('public', 'private', 'friends').
     * @return \Illuminate\Database\Eloquent\Collection Колекція отриманих файлів.
     */
    public function getFilesFilteredByVisibility($visibility = null)
    {
        $userFilesQuery = $this->userFile()
            ->when($visibility, function ($query) use ($visibility) {
                // Додавання умови за видимістю, якщо параметр $visibility не null
                $query->where('visible', $visibility);
            });
        return $userFilesQuery->get();
    }

    /**
     * Отримує файли користувача за вказаним типом та видимістю.
     *
     * @param  string|null $type Тип файлу ( 'image', 'video', 'music').
     * @param  string|null $visibility Рівень видимості файлу ('public', 'private', 'friends').
     * @return \Illuminate\Database\Eloquent\Collection Колекція отриманих файлів.
     */
    public function getUserFileType($type = null, $visibility = null)
    {
        $userFilesQuery = $this->userFile()
            ->when($type, function ($query) use ($type) {
                // Додавання умови за типом, якщо параметр $type не null
                $query->where('type', $type);
            })
            ->when($visibility, function ($query) use ($visibility) {
                // Додавання умови за видимістю, якщо параметр $visibility не null
                $query->where('visible', $visibility);
            });
        return $userFilesQuery->get();
    }
    public function getUserProfileData()
    {
        return $this->select('id', 'name', 'last_name', 'profile_image_url')
            ->with('aboutMe')
            ->find($this->id);
    }
    public function getFriendsAndFollowers($activeUserId = null)
    {
        $activeUserId = $activeUserId ?? $this->id;
        $followingUsersIds = $this->following()->pluck('users.id')->toArray();
        $followersUsersIds = $this->followers()->pluck('users.id')->toArray();
    
        // Знаходимо спільних користувачів у обох масивах
        $friendsIds = array_intersect($followingUsersIds, $followersUsersIds);
    
        // Визначаємо, чи є активний користувач другом, підписаним чи підписником
        $isFriend = in_array($activeUserId, $friendsIds);
        $isFollowing = in_array($activeUserId, $followingUsersIds);
        $isFollower = in_array($activeUserId, $followersUsersIds);
    
        $friendsCount = count($friendsIds);
        $filteredFollowingUsersIds = array_diff($followingUsersIds, [$activeUserId]);
        $filteredFollowersUsersIds = array_diff($followersUsersIds, [$activeUserId]);
        // Видаляємо активного користувача зі списків, якщо потрібно
        $filteredFriendsIds = array_diff($friendsIds, [$activeUserId]);
    
        $friends = User::whereIn('id', $filteredFriendsIds)->get();
        $following = User::whereIn('id', $filteredFollowingUsersIds)->get();
        $followers = User::whereIn('id', $filteredFollowersUsersIds)->get();
    
        return [
            'isFriend' => $isFriend,
            'isFollowing' => $isFollowing,
            'isFollower' => $isFollower,
            'friends' => $friends,
            'friendsCount' => $friendsCount,
            'following' => $following,
            'followingCount' => count($following),
            'followers' => $followers,
            'followersCount' => count($followers)
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
