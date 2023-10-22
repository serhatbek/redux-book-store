import './BookCard.scss';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbHandClick } from 'react-icons/tb';
// import { fetchSingleBook } from '../../features/books/booksSlice';

const BookCard = ({ book }) => {
  //   const dispatch = useDispatch();
  const { id, title, authors, image_url: img, num_pages: pages } = book;

  return (
    <Link className='book-card' to={`/book/${id}`}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div>
        <h4>{title}</h4>
        <h5>{authors}</h5>
        <p>
          <span>Pages:</span> {pages}
        </p>
      </div>
      <div className='book-card--hover'>
        <TbHandClick /> Read More
      </div>
    </Link>
  );
};

export default BookCard;
