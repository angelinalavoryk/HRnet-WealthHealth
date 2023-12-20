import React from 'react';
import search from '../../images/search.png'

const SearchBar = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className='search-bar'>
     <span> <img src={search} alt="" className='png-search-bar'/></span>

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

