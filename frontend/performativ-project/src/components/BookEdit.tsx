import React, { useState, useEffect } from 'react';
import { API_LIST_ENDPOINT } from './backendEndpointConfig';
import axios from 'axios';

interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
}

interface Props {
  bookId: number;
}

const BookEdit: React.FC<Props> = ({ bookId }) => {
  const [book, setBook] = useState<Book | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [updateStatus, setUpdateStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${API_LIST_ENDPOINT}/${bookId}`);
        const bookData = response.data;
        setBook(bookData);
        setTitle(bookData.title);
        setDescription(bookData.description);
        setAuthor(bookData.author);
        setCategory(bookData.category);
      } catch (error) {
        console.error(error);
        // Handle error response
      }
    };

    fetchBook();
  }, [bookId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateStatus('pending');

    try {
      const response = await axios.put(`${API_LIST_ENDPOINT}/${bookId}`, {
        title,
        description,
        author,
        category
      });
      console.log(response.data);
      setUpdateStatus('success');
      // Handle success response
    } catch (error) {
      console.error(error);
      setUpdateStatus('error');
      // Handle error response
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Book</h2>
      {updateStatus === 'success' && (
        <div className="popup success">Book updated successfully!</div>
      )}
      {updateStatus === 'error' && (
        <div className="popup error">Failed to update the book. Please try again.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BookEdit;
