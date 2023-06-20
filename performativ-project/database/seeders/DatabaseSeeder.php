<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call(BooksTableSeeder::class);
        // Uncomment the following lines if you have other seeders to execute
        // $this->call(OtherTableSeeder::class);
        // $this->call(AnotherTableSeeder::class);
    }
}
