import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ products, onAddToCart  }) => {
    if (products === undefined)
        return (<h2>Producto no definido</h2>);
  return (
    <div className="item-list">
      {products.map(product => (
        <div key={product.id} className="item-card">
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`}>Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
