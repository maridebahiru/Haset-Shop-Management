
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Ga6cWEqa90QYz7ce2IaMYP23bSFEjXc",
  authDomain: "shop-managment-7841e.firebaseapp.com",
  projectId: "shop-managment-7841e",
  storageBucket: "shop-managment-7841e.firebasestorage.app",
  messagingSenderId: "1084127260215",
  appId: "1:1084127260215:web:ce4fe09d6c1b6c0e1919b2",
  measurementId: "G-YPNJNLBLK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
