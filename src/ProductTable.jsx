import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

export default function ProductTable({ products, filterText, inStockOnly }) {
  // const rows = [];
  // let lastCategory = null;

  // products.forEach((product) => {
  //   if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 || inStockOnly && !product.stocked) {
  //     return;
  //   }
  //   if (product.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow
  //         category={product.category}
  //         key={product.category} />
  //     );
  //   }
  //   rows.push(
  //     <ProductRow
  //       product={product}
  //       key={product.name} />
  //   );
  //   lastCategory = product.category;
  // });

  const filteredProducts = products.filter(product => product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 
    && (!inStockOnly || (inStockOnly && product.stocked)));

  const rows = filteredProducts.map((product, idx, arr) => {
    const isFirstInCategory = idx === 0 || product.category !== arr[idx - 1].category;

    return (
      <React.Fragment key={product.name}>
        {isFirstInCategory && (
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        )}
        <ProductRow
          product={product}
          key={product.name}
        />
      </React.Fragment>
    );
  });

  return (
    <table className='product-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}