import './Home.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BooksList from '../../components/BooksList/BooksList';
import { fetchAllBooks } from '../../features/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);
  return (
    <section className='home'>
      <div className='home__title'>
        <h2>Books List</h2>
      </div>
      <div className='container'>
        <BooksList />
      </div>
    </section>
  );
};

export default Home;
