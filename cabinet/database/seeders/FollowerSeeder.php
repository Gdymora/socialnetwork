<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// php artisan db:seed --class=FollowerSeeder
class FollowerSeeder extends Seeder
{
    public function run()
    {
        $users = \App\Models\User::all();
    
        foreach ($users as $user) {
            $followers = $users->random(3); // Кожен користувач підписується на випадкові 3 інших користувачів
            $user->follow($followers);
        }
    }
}
