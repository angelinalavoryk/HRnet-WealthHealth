import React from 'react';

const Pagination = ({
  pageIndex,
  pageSize,
  pageOptions,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  setPageSize,
  dataLength,
}) => {
  return (
    <div className='container-bottom-list'>
      <div>
        <span className='showing-entries-txt'>
          Showing {pageIndex * pageSize + 1} to{' '}
          {Math.min((pageIndex + 1) * pageSize, dataLength)} of {dataLength} entries
        </span>
      </div>
      <div className='pagination'>
        <button
          className='button-navigation-page'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Précédent
        </button>
        <span>
          {pageIndex + 1} / {pageOptions.length}
        </span>
        <button
          className='button-navigation-page'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Pagination;
