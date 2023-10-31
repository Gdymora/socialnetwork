<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserAdditionalData;
use Faker\Factory as FakerFactory;

class UserAdditionalDataSeeder extends Seeder
{
    public function run()
    {
        $usersCount = 11;
        $faker = FakerFactory::create();

        for ($i = 1; $i <= $usersCount; $i++) {
            $userData = [
                'user_id' => $i,
                'education' => $faker->sentence,
                'birthplace' => $faker->city,
                'hobbies' => $faker->words(3, true),
                'occupations' => $faker->sentence,
            ];
            UserAdditionalData::create($userData);
        }
    }
}
