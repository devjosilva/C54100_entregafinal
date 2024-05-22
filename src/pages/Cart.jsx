import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart, removeItem } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <br></br>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title} />                
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
