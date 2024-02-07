<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Comment;
// php artisan db:seed --class=CommentSeeder
class CommentSeeder extends Seeder
{
    public function run()
    {
        $posts = \App\Models\Post::all();
        $users = \App\Models\User::all();

        foreach ($posts as $post) {
            Comment::factory()->count(rand(1, 3))->create([
                'post_id' => $post->id,
                'user_id' => $users[rand(1, 10)]->id
            ])->each(function ($comment) use ($users, $post) {
                // Додавання вкладених коментарів (дочірніх)
                $comment->childComments()->saveMany(
                    Comment::factory()
                        ->count(rand(1, 3)) // Кількість дочірніх коментарів
                        ->create([
                            'user_id' => $users[rand(1, 10)]->id,
                            'post_id' => $post->id
                        ])
                );
            });
        }
    }

    // php artisan db:seed --class=CommentSeeder

}