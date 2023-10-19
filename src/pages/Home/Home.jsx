import { useDispatch } from 'react-redux';
import BooksList from '../../components/BooksList/BooksList';
import { useEffect } from 'react';
import { fetchAllBooks } from '../../features/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);
  return (
    <div>
      <BooksList />
    </div>
  );
};

export default Home;
