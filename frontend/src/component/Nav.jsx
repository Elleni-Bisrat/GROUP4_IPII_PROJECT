import React from "react";
import  Search  from "./Search";
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <div className="flex justify-between items-center p-2 bg-gradient-to-r from-green-200 to-blue-900  ">
      <div className="flex items-center space-x-2">
        <img
          src="/images/logoo.webp"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-m font-semibold">
          <Link to="/">SE-RESOURCE</Link>
        </span>
      </div>

      <div className="flex space-x-6 text-lg ">
        <Link to="/" className=" hover:text-black">
          Home
        </Link>
        <Link to="/about" className=" hover:text-black">
          About
        </Link>
        <Link to="/courses" className=" hover:text-black">
          Courses
        </Link>
        <Link to="/login" className=" hover:text-black">
          Login
        </Link>
      
        <Search />
      </div>
    </div>
  );
}

export default Navigate;
