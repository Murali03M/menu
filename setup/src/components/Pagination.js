import React from 'react';

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) 
  {
    pageNumbers.push(i);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageNumbers.length;

  return (
    <div className="pagination">
      <button onClick={() => paginate(1)} disabled={isFirstPage}>
        {'<'}
      </button>

      {pageNumbers.map((number) => {
        const isActive = currentPage === number;

        if (number === 1 || number === pageNumbers.length || (number >= currentPage - 1 && number <= currentPage + 1)) {
          return (
            <button key={number} onClick={() => paginate(number)} className={isActive ? 'active' : ''}>
              {number}
            </button>
          );
        }

        if (number === 2 || number === pageNumbers.length - 1) {
          return <div key={number}>...</div>;
        }

        return null;
      })}

      <button onClick={() => paginate(pageNumbers.length)} disabled={isLastPage}>
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
