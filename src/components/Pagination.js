import React from 'react';
  
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            backgroundColor: page === currentPage ? '#0056b3' : '#007bff',
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
