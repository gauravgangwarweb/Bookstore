import React from 'react';
import BooksList from '../components/BooksList';
import AddBookForm from '../components/AddBookForm';

const BooksPage = () => {
    return (
        <div className='border-2 border-black mt-5'>
            <BooksList />
            <AddBookForm />
        </div>
    )
}

export default BooksPage;