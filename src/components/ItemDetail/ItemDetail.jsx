import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div className="details">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
      <Link to="/products">Volver a Productos</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
