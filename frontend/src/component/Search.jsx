import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleSearch}
      className="bg-green-400 hover:bg-green-500 w-22 h-8 indent-4 text-sm placeholder-white rounded-full text-white focus:outline-none"
    />
  );
};

export default Search;
