import React, { useState } from 'react';
import axios from 'axios';
import { API_LIST_ENDPOINT } from './backendEndpointConfig';

type Props = {
  bookId: number;
  onDelete: () => void;
};

const BookDelete: React.FC<Props> = ({ bookId, onDelete }) => {
  const [deleteStatus, setDeleteStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const handleDelete = async () => {
    setDeleteStatus('pending');

    try {
      await axios.delete(`${API_LIST_ENDPOINT}/${bookId}`);
      setDeleteStatus('success');
      onDelete();
    } catch (error) {
      console.error(error);
      setDeleteStatus('error');
      // Handle error response
    }
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <p>Are you sure you want to delete this book?</p>
      {deleteStatus === 'success' && (
        <div className="popup success">Book deleted successfully!</div>
      )}
      {deleteStatus === 'error' && (
        <div className="popup error">Failed to delete the book. Please try again.</div>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookDelete;
