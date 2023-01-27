import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar flex justify-between items-center px-10">
    <div className="w-[100%] flex bg-[#ffffff] h-24 items-center gap-10">
      <h4 className="text-[#0290ff] text-right text-[30px] font-extrabold">TC Bookstore</h4>
      <div className="flex gap-4 text-[18px]">
        <Link className="active:text-red-600" to="/">Books</Link>
        <Link className="active:text-red-600" to="/categories">Categories</Link>
      </div>
    </div>
    <button className="border-2 user-button p-3 rounded-full" type="button">
      <i className="fa-solid fa-user" />
      {/* hh */}
    </button>
  </div>
);

export default Navbar;
