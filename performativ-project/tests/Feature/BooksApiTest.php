<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BooksApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test GET /api/books endpoint.
     */
    public function testGetBooks()
    {
        $response = $this->get('/api/books');

        $response->assertStatus(200); // Assert that the response status code is 200 (OK)
        $response->assertJsonStructure([
            '*' => [
                'id',
                'title',
                'description',
                'author',
                'category',
                'created_at',
                'updated_at',
            ],
        ]); // Assert the JSON structure of the response
    }
}
