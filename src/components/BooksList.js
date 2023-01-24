import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="p-5">
      <h2 className="text-center text-[30px] font-extrabold">Books List</h2>
      { books.map((book) => (
        <Book key={1} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BooksList;
