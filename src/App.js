import React from 'react';
import FilterableProductTable from './FilterProductTable.jsx';
import PRODUCTS from './products.json';

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
