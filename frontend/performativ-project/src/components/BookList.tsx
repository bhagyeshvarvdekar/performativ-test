import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Book } from './types';
const { API_LIST_ENDPOINT } = require('./backendEndpointConfig');



const BookList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortParam = queryParams.get('sort') || 'title'; // Use 'title' as the default sort if not provided
  const filterParam = queryParams.get('filter') || ''; // Use an empty string as the default filter if not provided
  const [books, setBooks] = useState<Book[]>([]);


  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetchBooks(sortParam, filterParam);
  }, [sortParam, filterParam]);

  const fetchBooks = async (sort = 'title', filter = ''): Promise<void> => {
    try {
      const params = {
        sort,
        filter,
      };

      const response = await axios.get(API_LIST_ENDPOINT, { params });
      const booksData: Book[] = response.data;

      const updatedBooks = await Promise.all(
        booksData.map(async (book) => {
          const updatedBook = await fetchAdditionalInfo(book);
          return updatedBook;
        })
      );

      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };


  const fetchAdditionalInfo = async (book: Book): Promise<Book> => {
    try {
      const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${book.title}`);
      const additionalInfo = response.data.extract;
      const imageUrl = response.data.originalimage?.source; // Extract the full-size image URL from the response

      const updatedBook: Book = { ...book, additionalInfo, imageUrl };
      return updatedBook;
    } catch (error) {
      console.error('Error fetching additional information:', error);
      return book;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
  };

  const handleSearchFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(e.target.value);
  };


  const filterAndSortBooks = (): Book[] => {
    let filteredBooks = books;

    if (searchQuery && searchField === 'category') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchQuery && searchField === 'author') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchQuery && searchField === 'title') {
      filteredBooks = filteredBooks.filter((book: Book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy) {
      filteredBooks = filteredBooks.sort((bookA: Book, bookB: Book) => {
        if (sortBy === 'title') {
          return bookA.title.localeCompare(bookB.title);
        } else if (sortBy === 'author') {
          return bookA.author.localeCompare(bookB.author);
        } else if (sortBy === 'category') {
          return bookA.category.localeCompare(bookB.category);
        } else {
          return 0;
        }
      });
    }

    return filteredBooks;
  };



  const filteredAndSortedBooks = filterAndSortBooks();

  return (
    <div>
      <h2>Book List</h2>
      <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} />
    </div>
    <div>
      <label htmlFor="searchField">Search Field:</label>
      <select id="searchField" value={searchField} onChange={handleSearchFieldChange}>
        <option value="">All Fields</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="category">Category</option>
      </select>
    </div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div>
        <Link to="/create">Create Book</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Category</th>
            <th>Additional Info</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedBooks.map((book: Book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.additionalInfo}</td>
              <td>
                {book.imageUrl && (
                  <a href={book.imageUrl} target="_blank" rel="noopener noreferrer">
                    <img src={book.imageUrl} alt={book.title} style={{ width: '100px' }} />
                  </a>
                )}
              </td>
              <td>
                <a href={`/edit/${book.id}`}>Edit</a> |{' '}
                <a href={`/delete/${book.id}`}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
