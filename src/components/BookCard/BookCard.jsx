import { Link } from 'react-router-dom';
import './BookCard.scss';
import { TbHandClick } from 'react-icons/tb';

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
