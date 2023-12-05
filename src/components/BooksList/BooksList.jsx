import './BooksList.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAllBooks } from '../../features/books/booksSlice';

import BookCard from '../BookCard/BookCard';

const BooksList = () => {
  const [bookCount, setBookCount] = useState(20);
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks(bookCount));
  }, [bookCount]);

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

// import { useSelector } from 'react-redux';
// import BookCard from '../BookCard/BookCard';
// import './BooksList.scss';
// import { useEffect, useRef, useState } from 'react';

// const BooksList = () => {
//   const { books, isLoading } = useSelector((state) => state.books);
//   const [booksToShow, setBooksToShow] = useState(10);
//   const [observerRef, setObserverRef] = useState(null);

//   const lastBookRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setBooksToShow((prevCount) => prevCount + 10);
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     console.log(booksToShow, lastBookRef.current);

//     if (lastBookRef.current) {
//       observer.observe(lastBookRef.current);
//       setObserverRef(lastBookRef.current);
//     }

//     return () => {
//       if (lastBookRef.current) {
//         observer.unobserve(lastBookRef.current);
//       }
//     };
//   }, [booksToShow, lastBookRef]);

//   if (isLoading) {
//     return (
//       <div className='loading'>
//         <div className='lds-ripple'>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='book-list'>
//       {books?.slice(0, booksToShow).map((book, index) => {
//         if (index === books.length - 1) {
//           return (
//             <div key={book.id} ref={lastBookRef}>
//               <BookCard book={book} />
//             </div>
//           );
//         }
//         return <BookCard key={book.id} book={book} />;
//       })}
//       {observerRef && <div ref={observerRef}></div>}
//     </div>
//   );
// };

// export default BooksList;
