import React from 'react';
import Book from './Book';

const BooksList = () => (
  <div className="p-5">
    <h2 className="text-center text-[30px] font-extrabold">Books List</h2>
    <Book title="Title 1" author="Author 1" />
  </div>
);

export default BooksList;
