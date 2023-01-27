import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="p-5">
      <h2 className="text-center text-[30px] font-extrabold">Books List</h2>
      { books.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
      ))}
    </div>
  );
};

export default BooksList;
