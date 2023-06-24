import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';
import BookDelete from './components/BookDelete';

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

function App() {
  return (
    <div>
      <h1>My Book Library</h1>
      <Router>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create" element={<BookCreate />} />
          <Route path="/edit/:id" element={<BookEditWithParams />} />
          <Route path="/delete/:id" element={<BookDeleteWithParams />} />
        </Routes>
      </Router>
    </div>
  );
}

const BookEditWithParams: React.FC = () => {
  const { id } = useParams<RouteParams>() as { id: string };
  return <BookEdit bookId={Number(id)} />;
};

const BookDeleteWithParams: React.FC = () => {
  const { id } = useParams<RouteParams>() as { id: string };
  return <BookDelete bookId={Number(id)} onDelete={() => {}} />;
};

export default App;
