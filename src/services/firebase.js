// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJ3n_r4hiqQxpQW9L_L3c8C8fXt2-ltVQ",
    authDomain: "c54100entregafinal.firebaseapp.com",
    projectId: "c54100entregafinal",
    storageBucket: "c54100entregafinal.appspot.com",
    messagingSenderId: "274173637471",
    appId: "1:274173637471:web:725aa8f845b61e9a643cea"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
