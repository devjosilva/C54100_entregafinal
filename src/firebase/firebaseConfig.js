// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ3n_r4hiqQxpQW9L_L3c8C8fXt2-ltVQ",
  authDomain: "c54100entregafinal.firebaseapp.com",
  projectId: "c54100entregafinal",
  storageBucket: "c54100entregafinal.appspot.com",
  messagingSenderId: "274173637471",
  appId: "1:274173637471:web:725aa8f845b61e9a643cea"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

  export const getAllProducts = async () => {
    const miColec = collection(db,'products');
    const itemsSnapshot = await getDocs(miColec);

    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    })
  };  
  export const getProductByID = async (id) => {
    const miColec = collection(db,'products');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);
   
    return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
    }
  };

  export const getProductsByCategory = async (categoryid) => {
    const miColec = collection(db,'products');
    const queryItem = query(miColec, where("category", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    };

    export const getProductsByName = async (name) => {
        const miColec = collection(db,'products');
        const queryItem = query(miColec, where("title", 'in', name));
        const itemSnapshot = await getDocs(queryItem);
    
        return itemSnapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
        };
    /*

export async function getAllItems() {
    const miColec = collection(db,'products');
    const itemsSnapshot = await getDocs(miColec);

    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    })
}

export async function getItemsByCategory(categoryid){
    const miColec = collection(db,'products');
    const queryItem = query(miColec, where("category", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
}

export async function getItem(id){
    const miColec = collection(db,'products');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);
   
    return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
    }
}

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now()
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    }
 
    const miColec = collection(db,'ordencompra')
    const orderDoc = await addDoc(miColec, orderWithDate)
    console.log("Orden lista con el id ",orderDoc.id)
    return orderDoc.id
}
*/
