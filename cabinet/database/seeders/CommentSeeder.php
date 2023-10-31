<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    public function run()
    {
         
        $posts = \App\Models\Post::all();
        $users = \App\Models\User::all();
        foreach ($posts as $post) {
            \App\Models\Comment::factory()->count(rand(1, 5))->create([
                'post_id' => $post->id,  
                'user_id' => $users[rand(1, 11)]->id 
            ]);
        }
    }
}