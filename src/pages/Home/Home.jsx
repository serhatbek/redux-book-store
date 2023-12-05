import './Home.scss';
import BooksList from '../../components/BooksList/BooksList';

const Home = () => {
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
