<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run()
    {
        // Створіть пости для різних користувачів
        $users = \App\Models\User::all();

        foreach ($users as $user) {
            \App\Models\Post::factory()->count(rand(1, 5))->create([
                'author_id' => $user->id, 
            ]);
        }
    }
}