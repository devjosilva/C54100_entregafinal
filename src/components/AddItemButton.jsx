// src/components/AddItemButton.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

const AddItemButton = ({ item }) => {
  const { addItem } = useCart();

  return (
    <button onClick={() => addItem(item, 1)}>
      Add to Cart
    </button>
  );
};

export default AddItemButton;
