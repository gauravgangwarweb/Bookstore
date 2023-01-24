import React from 'react';
import { useDispatch } from 'react-redux';

const AddBookForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          dispatch({
            title: e.target.elements.title.value,
            author: e.target.elements.author.value,
          });
        }}
      >
        <input className="border-2 border-black" name="title" type="text" placeholder="Input title" />
        <input className="border-2 border-black" name="author" type="text" placeholder="Input author" />
        <input className="border-2 border-black" type="submit" />
      </form>
    </div>
  );
};

export default AddBookForm;
