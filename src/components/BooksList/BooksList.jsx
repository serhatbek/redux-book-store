import { useSelector } from 'react-redux';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  // console.log(books);
  return <div>BooksList</div>;
};

export default BooksList;
