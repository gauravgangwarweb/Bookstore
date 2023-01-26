import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="p-5">
      <h2 className="text-center text-[30px] font-extrabold">Books List</h2>
      { books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </div>
  );
};

export default BooksList;
