// src/components/ItemDetail.jsx
import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import Description from './Description';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <Description description={item.description} />
      <ItemQuantitySelector />
      <AddItemButton item={item} />
    </div>
  );
};

export default ItemDetail;
