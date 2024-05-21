// src/components/ItemList.jsx
import React from 'react';
import ItemDetail from './ItemDetail';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <ItemDetail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
