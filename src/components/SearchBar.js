import React from 'react';
  
const SearchBar = ({ onSearch }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Rechercher un film..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;