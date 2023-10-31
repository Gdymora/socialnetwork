<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'test',
            'email' => 'test@example.com',
            'password' => 'secret',
        ]); 
        $this->call(PostSeeder::class);
        $this->call(FollowerSeeder::class);
        $this->call(CommentSeeder::class);        
        // php artisan db:seed --class=CommentSeeder
    }
}
