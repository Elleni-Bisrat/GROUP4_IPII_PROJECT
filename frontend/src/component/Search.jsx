import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate("/courses");
      setQuery("");
    }
  };

  return (
    <div className="relative w-1/2">
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleSearch}
      className="bg-green-500 hover:bg-green-700 w-21 h-8 indent-9 text-md placeholder-white rounded-full text-white focus:outline-none"
    />
    <IoSearch className="absolute top-1.5 left-2 text-white text-lg"/>
    
     </div>
  );
 
};

export default Search;
