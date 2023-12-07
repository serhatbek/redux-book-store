import './BooksList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { fetchAllBooks } from '../../features/books/booksSlice';

import BookCard from '../BookCard/BookCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const BooksList = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [booksToShow, setBooksToShow] = useState(12);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const cbFunc = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    threshold: 0.9,
    rootMargin: '0px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cbFunc, options);

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.observe(containerRef.current);
    };
  }, [containerRef, options]);

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        setBooksToShow((prev) => prev + 10);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    dispatch(fetchAllBooks(booksToShow));
  }, [booksToShow]);

  return (
    <>
      <div className='book-list'>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        <div className='isHidden' ref={containerRef}></div>
      </div>
      {isLoading && (
        <div className='flex-center'>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default BooksList;
