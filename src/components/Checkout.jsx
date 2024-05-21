// src/components/Checkout.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import Brief from './Brief';

const Checkout = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Checkout</h1>
      <Brief cart={cart} />
      {/* Add your payment logic here */}
    </div>
  );
};

export default Checkout;
