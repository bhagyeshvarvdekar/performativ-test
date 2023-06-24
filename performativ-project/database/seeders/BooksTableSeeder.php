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
            'title' => 'Ulysses',
            'description' => 'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904.',
            'author' => 'James Joyce',
            'category' => 'novel',
        ]);

        Book::create([
            'title' => 'Don Quixote',
            'description' => 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper.',
            'author' => 'Miguel de Cervantes',
            'category' => 'novel',
        ]);

        Book::create([
            'title' => 'The Great Gatsby',
            'description' => 'The novel chronicles an era that Fitzgerald himself dubbed the Jazz Age',
            'author' => 'F. Scott Fitzgerald',
            'category' => 'fiction',
        ]);
    }
}
