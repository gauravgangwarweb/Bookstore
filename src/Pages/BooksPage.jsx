import React from 'react';
import BooksList from '../components/BooksList';
import AddBookForm from '../components/AddBookForm';

const BooksPage = () => (
  <div className="flex flex-col justify-center">
    <BooksList />
    <AddBookForm />
  </div>
);

export default BooksPage;
