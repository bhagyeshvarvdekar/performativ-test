<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Book;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title' => 'Book 1',
            'description' => 'Description 1',
            'author' => 'Author 1',
            'category' => 'Category 1',
        ]);

        Book::create([
            'title' => 'Book 2',
            'description' => 'Description 2',
            'author' => 'Author 2',
            'category' => 'Category 2',
        ]);
    }
}
