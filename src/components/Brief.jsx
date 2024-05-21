// src/components/Brief.jsx
import React from 'react';

const Brief = ({ cart }) => {
  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.quantity} x ${item.price}</p>
        </div>
      ))}
      <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default Brief;
