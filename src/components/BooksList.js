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
    <div className="p-5 border-b-2 w-[95%] flex flex-col self-center items-center4">
      { books.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
      ))}
    </div>
  );
};

export default BooksList;
