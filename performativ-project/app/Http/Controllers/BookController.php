<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request)
    {
        // Retrieve the query parameters for sorting and filtering
        $sort = $request->query('sort');
        $order = $request->query('order');
        $filter = $request->query('filter');

        // Query the books based on the filter criteria
        $query = Book::query();

        if ($filter) {
            // Apply the filter to the query
            $query->where('title', 'like', "%$filter%")
                  ->orWhere('author', 'like', "%$filter%")
                  ->orWhere('category', 'like', "%$filter%");
        }

        // Sort the books based on the sort criteria
        if ($sort) {
            $query->orderBy($sort, $order ?? 'asc');
        }

        // Retrieve the sorted and filtered books from the database
        $books = $query->get();

        // Return the books as a response
        return response()->json($books);
    }


    public function show($id)
    {
        // Find the book by its ID
        $book = Book::findOrFail($id);

        // Return the book as a response
        return response()->json($book);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'author' => 'required',
            'category' => 'required',
        ]);

        // Create a new book with the validated data
        $book = Book::create($validatedData);

        // Return the created book as a response
        return response()->json($book, 201);
    }

    public function update(Request $request, $id)
    {
        // Find the book by its ID
        $book = Book::findOrFail($id);

        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'author' => 'required',
            'category' => 'required',
        ]);

        // Update the book with the validated data
        $book->update($validatedData);

        // Return the updated book as a response
        return response()->json($book);
    }

    public function destroy($id)
    {
        // Find the book by its ID
        $book = Book::findOrFail($id);

        // Delete the book from the database
        $book->delete();

        // Return a success message as a response
        return response()->json(['message' => 'Book deleted successfully']);
    }
}
