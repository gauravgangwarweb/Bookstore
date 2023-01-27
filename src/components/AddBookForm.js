import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  return (
    <div className="mt-5 flex flex-col gap-5 pb-28 w-[90%] self-center">
      <h2 className="font-bold text-[#888888] text-[20px]">ADD NEW BOOK</h2>
      <form
        className="flex gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook(book));
          e.target.title.value = '';
          e.target.author.value = '';
        }}
      >
        <input
          className="input-items w-[40%] p-2"
          name="title"
          type="text"
          placeholder="Input title"
          onChange={(e) => setBook({
            ...book, title: e.target.value, item_id: uuid(), category: 'Fiction',
          })}
        />
        <input className="input-items w-[40%] p-2" name="author" type="text" placeholder="Input author" onChange={(e) => setBook({ ...book, author: e.target.value })} />
        <input className="bg-[#0290ff] px-20 py-2" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};
// onClick={() => {dispatch(addBook(book))}}
export default AddBookForm;
