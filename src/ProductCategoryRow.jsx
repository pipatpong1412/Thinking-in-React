import React from 'react';

export default function ProductCategoryRow({ category }) {
  
  const cateColor = category === 'Fruits' ? '#FFA500' : '#4CAF50'

  return (
    <tr id='productCategory'>
      <th colSpan="2">
        <br />
        <span style={{ color: cateColor, fontSize: 22 }}>{category}</span>
      </th>
    </tr>
  );
}
