import React, { useState } from 'react';
import { API_LIST_ENDPOINT } from './backendEndpointConfig';
import axios from 'axios';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_LIST_ENDPOINT}`, {
        title,
        description,
        author,
        category
      });
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error response
    }

    // Reset the form fields
    setTitle('');
    setDescription('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <h2>Create Book</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
