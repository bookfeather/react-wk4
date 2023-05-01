import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore , collection , setDoc , getDocs , doc , deleteDoc } from "firebase/firestore";
import product from "../json/product.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "products"); 

export const feedImages = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(imagesCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "products", product.id));
  });
  // ADD NEW DOCS
  product.forEach(async (product) => {
    const docRef = await doc(imagesCollection);
    await setDoc(docRef, { ...product, id: docRef.id });
  });
};

export const getImages = async () => {
    const querySnapshot = await getDocs(imagesCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    console.log({ result });
    return result
 };