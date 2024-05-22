import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Brief from './Brief';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      <Brief cartItems={cartItems} />
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Checkout;
