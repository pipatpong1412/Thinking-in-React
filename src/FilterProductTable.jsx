import React, { useState } from 'react';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';

export default function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div className='card'>
        <SearchBar
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }