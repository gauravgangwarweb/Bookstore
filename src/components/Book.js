import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="flex justify-between border-2 border-black p-5">
      <div className="flex gap-5">
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
      <button className="border-2 border-black" type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
