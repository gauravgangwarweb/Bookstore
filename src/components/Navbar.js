import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="w-[100%] flex bg-black h-10 items-center px-10 gap-5">
    <h4 className="text-red-600 text-right font-semibold text-[18px]">TC Bookstore</h4>
    <div className="flex gap-4 text-white">
      <Link className="active:text-red-600" to="/">Books</Link>
      <Link className="active:text-red-600" to="/categories">Categories</Link>
    </div>
  </div>
);

export default Navbar;
