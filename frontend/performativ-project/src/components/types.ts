export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  additionalInfo?: string;
  imageUrl?: string;
}

export interface BookDeleteProps {
  bookId: number;
  onDelete: () => void;
}
