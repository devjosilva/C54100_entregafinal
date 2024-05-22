import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from '../firebase/firebaseConfig';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore(firebaseConfig);
    const productsCollection = collection(db, 'products');

    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    console.log("prod", productsCollection )
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <ItemList products={products} />;
};

export default ItemListContainer;
