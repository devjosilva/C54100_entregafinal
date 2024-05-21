// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "items", itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("no existe docto.");
      }
    };

    fetchItem();
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Loading...</p>;
};

export default ItemDetailContainer;
