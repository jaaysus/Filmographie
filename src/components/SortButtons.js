import React from 'react';
  
const SortButtons = ({ onSort }) => {
  return (
    <div>
      <button onClick={() => onSort('rating')}>Trier par note</button>
      <button onClick={() => onSort('releaseYear')}>Trier par année</button>
    </div>
  );
};

export default SortButtons;