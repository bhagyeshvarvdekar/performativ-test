# performativ-test

Book Management System
This is a simple book management system built with Laravel. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

# Installation
Clone the repository: `git clone https://github.com/bhagyeshvarvdekar/performativ-test.git`

Navigate to the project directory: `cd performativ-test`

Install the dependencies: composer install

Create a copy of the .env.example file and rename it to .env

Generate the application key: `php artisan key:generate`

Set up your database credentials in the .env file

Run the database migrations: `php artisan migrate`

Start the MySQL server. Use the following command:

For Mac: `mysql.server start`
For Linux: `sudo service mysql start`
Seed the database with sample data: `php artisan db:seed`

Start the PHP development server: `php artisan serve`

The server will run at http://127.0.0.1:8000.

Please note that this development server is intended for local development and may not include optimizations for production environments.

# Usage
Access the application in your browser at http://localhost:8000
Use the provided API endpoints to perform CRUD operations on books:

GET /api/books - Retrieve all books

GET /api/books/{id} - Retrieve a specific book by ID

POST /api/books - Create a new book

PUT /api/books/{id} - Update a book by ID

DELETE /api/books/{id} - Delete a book by ID

# Frontend Development Server
To start the frontend development server, follow these steps:

Navigate to the frontend/performativ-project folder.
Install the required dependencies: `npm install`

Start the development server: `npm start`

The server will run at http://localhost:3000.

Please note that this development server is intended for local development and may not include optimizations for production environments.

## Main Page of the website

The main page displays a list of all the books in your library. Here's what you can do on the main page:

- View Books: Browse through the list of books and get an overview of their details, including the title, author, description, and category.

- Sort Books: Sort the books based on different criteria such as title, author, or category. You can choose to sort the books in ascending or descending order.

- Filter Books: Use the search functionality to filter the books based on specific keywords. The search query will match against the book's title, author, or category.

- Additional Information: When viewing a book, the application integrates with Wikipedia to provide additional information about the book. You can find a summary, related articles, and more details sourced from Wikipedia.

- Book Images: The application also retrieves book images from an external source and displays them alongside the book information. This enhances the visual experience and helps you identify the books quickly.

- Manage Books: Each book entry in the list provides options to edit or delete the book. Clicking on the "Edit" button allows you to update the book's information, while the "Delete" button removes the book from your library.

- Add New Book: At the top of the page, there is a button labeled "Add Book." Clicking on this button takes you to a form where you can enter the details of a new book and add it to your collection.

Feel free to explore the main page and make use of the sorting, filtering, and management features to organize and maintain your book library efficiently. Enjoy the integration with Wikipedia and the visual representation of book images!


# Folder Structure
app/Http/Controllers - Contains the controller classes responsible for handling book-related operations.

app/Models - Contains the model class representing the book entity.

database/migrations - Contains the database migration files for creating and modifying the books table.

routes/api.php - Defines the API routes for the book-related operations.

frontend/performativ-project - Contains the frontend code for the book management system.


# Running Backend Tests
To execute the backend tests for the application, you can use the following command:

`php artisan test`

This command will run all the tests located in the tests directory. It includes both unit tests and feature tests.

If you want to run a specific test class or test case, you can use the --filter option followed by the test class or test case name. For example, to run only the BooksApiTest class, you can use:

`php artisan test --filter BooksApiTest`

Make sure to set up the database for testing, which is usually handled by Laravel's testing framework. You can configure the testing database in the .env.testing file.

By running the tests, you can verify the functionality and behavior of the backend API endpoints defined in the application.


# Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

License
This project is open source and available under the MIT License.

GitHub Repository
Find the source code on GitHub.
