import React from "react";
import  Search  from "./Search";
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <div className="flex justify-between items-center p-2 bg-gradient-to-r from-green-300 to-blue-300  ">
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
        <Link to="/" className=" hover:underline">
          Home
        </Link>
        <Link to="/about" className=" hover:underline">
          About
        </Link>
        <Link to="/courses" className=" hover:underline">
          Courses
        </Link>
        <Link to="/login" className=" hover:underline">
          Login
        </Link>
        <Search />
      </div>
    </div>
  );
}

export default Navigate;
