// src/components/CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <Link to="/cart">
      <span>Cart ({cart.length})</span>
    </Link>
  );
};

export default CartWidget;
