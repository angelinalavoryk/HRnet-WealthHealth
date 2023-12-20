import React from 'react';

const SearchBar = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className='search-bar'>
      <span>🔍</span>
      <input
        className='input-search-bar'
        type='text'
        placeholder='Search...'
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar ;

