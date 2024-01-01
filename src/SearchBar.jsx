import React from 'react';

export default function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form className='search-bar'>
        <input id='search'
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label id='checkbox'>
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }