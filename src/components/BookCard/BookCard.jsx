import { Link } from 'react-router-dom';
import './BookCard.scss';

const BookCard = ({ book }) => {
  //   console.log(book);
  const {
    id,
    title,
    authors,
    image_url: img,
    genre_list: genre,
    num_pages: pages,
    rating,
  } = book;
  return (
    <div className='book-card'>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div>
        <h4>{title}</h4>
        <h5>{authors}</h5>
        <p>Pages: {pages}</p>
      </div>
      <Link to={`/book/${id}`}>Read More</Link>
    </div>
  );
};

export default BookCard;
