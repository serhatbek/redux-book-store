import './BookDetail.scss';
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSingleBook,
  removeSelectedBook,
} from '../../features/books/booksSlice';

const BookDetail = () => {
  const { bookID } = useParams();
  const numBookID = Number(bookID);
  const dispatch = useDispatch();
  const { isLoading, singleBook } = useSelector((state) => state.books);
  // console.log('single book page', singleBook);

  useEffect(() => {
    dispatch(fetchSingleBook(numBookID));

    return () => {
      dispatch(removeSelectedBook());
    };
  }, [numBookID]);

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

  const {
    id,
    title,
    authors,
    image_url: img,
    genre_list: genre,
    num_pages: pages,
    rating,
    description,
  } = singleBook;

  return (
    <section className='book-detail'>
      <div className='container'>
        <div className='single-book'>
          <figure>
            <img src={img} alt={title} />
          </figure>
          <div>
            <h4>{title}</h4>
            <h5>{authors}</h5>
            <p>
              <span>Rating:</span> {rating}
            </p>
            <p>
              <span>Pages:</span> {pages}
            </p>

            <p>
              <span>Genres:</span> {genre}
            </p>
            <p>{description}</p>
            <Link to='/' className='single-book--btn'>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
