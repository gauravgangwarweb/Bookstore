import React from 'react';

const AddBookForm = () => (
  <div className="p-5">
    <form className="flex gap-3">
      <input className="border-2 border-black" type="text" placeholder="Input title" />
      <input className="border-2 border-black" type="text" placeholder="Input author" />
      <input className="border-2 border-black" type="submit" />
    </form>
  </div>
);

export default AddBookForm;
