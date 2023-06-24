import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import BookDelete from '../src/components/BookDelete';

jest.mock('axios');

describe('BookDelete', () => {
  it('should delete the book when the delete button is clicked', async () => {
    const bookId = 123;
    const onDelete = jest.fn();
    axios.delete.mockResolvedValueOnce({});
    
    render(<BookDelete bookId={bookId} onDelete={onDelete} />);
    
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    
    expect(axios.delete).toHaveBeenCalledWith(`${API_LIST_ENDPOINT}/${bookId}`);
    
    await waitFor(() => {
      expect(onDelete).toHaveBeenCalled();
      expect(screen.getByText('Book deleted successfully!')).toBeInTheDocument();
    });
  });
});
