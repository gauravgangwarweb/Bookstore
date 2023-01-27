import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-card flex justify-between py-8 px-14">
      <div className="flex flex-col gap-3">
        <div className="items-center">
          <p className="text-[#b5b5b5]">Action</p>
          <h4 className="text-[24px] font-bold">{title}</h4>
          <p className="text-[#558ec9] font-thin mt-[-3%]">{author}</p>
        </div>
        <div>
          <button type="button" className="text-[#558ec9] font-extralight pr-2 border-r-2">Comments</button>
          <button
            type="button"
            className="text-[#558ec9] font-extralight pr-2 pl-2 border-r-2"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            Remove
          </button>
          <button className="text-[#558ec9] font-extralight pr-2 pl-2" type="button">Edit</button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center pr-14 border-r-2 gap-2">
          <div className="progress-img" />
          <div>
            <p className="text-[30px] font-normal">64%</p>
            <p className="font-thin">Completed</p>
          </div>
        </div>
        <div className="pl-14 flex flex-col gap-4">
          <div>
            <p className="font-light text-[#bfbfbf] text-[12px]">CURRENT CHAPTER</p>
            <p className="font-thin">Chapter 17</p>
          </div>
          <button type="button" className="px-4 py-2 text-white bg-[#0290ff]">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.node.isRequired,
};

export default Book;
