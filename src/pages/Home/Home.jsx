import './Home.scss';
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
    <section className='home'>
      <h2></h2>
      <div className='container'>
        <BooksList />
      </div>
    </section>
  );
};

export default Home;
