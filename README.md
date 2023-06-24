# performativ-test

Book Management System
This is a simple book management system built with Laravel. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

Installation
Clone the repository: git clone https://github.com/bhagyeshvarvdekar/performativ-test.git

Navigate to the project directory: cd performativ-test

Install the dependencies: composer install

Create a copy of the .env.example file and rename it to .env

Generate the application key: php artisan key:generate

Set up your database credentials in the .env file

Run the database migrations: php artisan migrate

Start the MySQL server. Use the following command:

For Mac: mysql.server start
For Linux: sudo service mysql start
Seed the database with sample data: php artisan db:seed

Start the PHP development server: php artisan serve

The server will run at http://127.0.0.1:8000.
Usage
Access the application in your browser at http://localhost:8000
Use the provided API endpoints to perform CRUD operations on books:
GET /api/books - Retrieve all books
GET /api/books/{id} - Retrieve a specific book by ID
POST /api/books - Create a new book
PUT /api/books/{id} - Update a book by ID
DELETE /api/books/{id} - Delete a book by ID
Frontend Development Server
To start the frontend development server, follow these steps:

Navigate to the frontend/performativ-project folder.
Install the required dependencies: npm install
Start the development server: npm start
The server will run at http://localhost:3000.
Folder Structure
app/Http/Controllers - Contains the controller classes responsible for handling book-related operations.
app/Models - Contains the model class representing the book entity.
database/migrations - Contains the database migration files for creating and modifying the books table.
routes/api.php - Defines the API routes for the book-related operations.
frontend/performativ-project - Contains the frontend code for the book management system.
Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

License
This project is open source and available under the MIT License.

GitHub Repository
Find the source code on GitHub.
