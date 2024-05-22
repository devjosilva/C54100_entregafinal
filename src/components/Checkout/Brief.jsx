import React from 'react';

const Brief = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Brief;
