<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Book routes
Route::get('/books', [BookController::class, 'index']); // Get all books
Route::get('/books/{id}', [BookController::class, 'show']); // Get a specific book
Route::post('/books', [BookController::class, 'store']); // Create a new book
Route::put('/books/{id}', [BookController::class, 'update']); // Update a book
Route::delete('/books/{id}', [BookController::class, 'destroy']); // Delete a book
