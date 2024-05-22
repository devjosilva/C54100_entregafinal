import React from 'react';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="quantity-selector">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
