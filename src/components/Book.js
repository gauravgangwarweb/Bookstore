import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between border-2 border-black p-5">
      <div className="flex gap-5">
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
      <button className="border-2 border-black" type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.node.isRequired,
};

export default Book;
