import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--black bg-dark-orange'
        type='search'
        placeholder='Search for a Monster'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;