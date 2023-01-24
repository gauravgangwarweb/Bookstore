import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="border-2 border-black" type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default CategoriesPage;
