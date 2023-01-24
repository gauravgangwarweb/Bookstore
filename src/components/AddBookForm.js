import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  return (
    <div className="p-5">
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook(book));
          e.target.title.value = '';
          e.target.author.value = '';
        }}
      >
        <input className="border-2 border-black" name="title" type="text" placeholder="Input title" onChange={(e) => setBook({ ...book, title: e.target.value, id: uuid() })} />
        <input className="border-2 border-black" name="author" type="text" placeholder="Input author" onChange={(e) => setBook({ ...book, author: e.target.value })} />
        <input className="border-2 border-black" type="submit" />
      </form>
    </div>
  );
};
// onClick={() => {dispatch(addBook(book))}}
export default AddBookForm;
