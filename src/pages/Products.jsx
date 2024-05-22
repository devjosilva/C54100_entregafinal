import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db,  getAllProducts, getProductsByCategory, getProductsByName } from '../firebase/firebaseConfig';

import ItemList from '../components/ItemList/ItemList';
import './Products.css';

const Products = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { addItem } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsData = undefined;
        if (!categoryId)
          productsData = await getAllProducts();
        else
          productsData = await getProductsByCategory(categoryId);
        
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="products">
      <h2>Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          <ItemList products={products} onAddToCart={addItem} />
        </div>
      )}
    </div>
  );
};

export default Products;
