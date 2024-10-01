// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgV3-WVuaIOjlR-giG2TVa9tH1Eg6VRXE",
  authDomain: "expense-tracker-254c0.firebaseapp.com",
  projectId: "expense-tracker-254c0",
  storageBucket: "expense-tracker-254c0.appspot.com",
  messagingSenderId: "160337058042",
  appId: "1:160337058042:web:034bdd1c993e148686d143",
  measurementId: "G-MHL6FNSDX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
