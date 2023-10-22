import { useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import './BooksList.scss';

const BooksList = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  // console.log(books);

  if (isLoading) {
    return (
      <div className='loading'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className='book-list'>
      {books?.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BooksList;
