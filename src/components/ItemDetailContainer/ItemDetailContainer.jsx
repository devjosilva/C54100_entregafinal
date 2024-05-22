import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../firebase/firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("pasa por ItemDetailContainer", id) 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsData = await getProductByID(id);
        setProduct(productsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  /*
  useEffect(() => {
    const db = getFirestore(firebaseConfig);
    const productDoc = doc(db, 'products', id);
    getDoc(productDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
      setLoading(false);
    });
  }, [id]);
  */

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }  

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
