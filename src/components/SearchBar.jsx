import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search for movies..."
        className="p-2 border rounded-l-md w-1/2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
