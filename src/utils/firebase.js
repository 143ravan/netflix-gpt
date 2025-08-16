// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6ewGO6UDf2Za-I1T8cieB-EIYU3hSz7c",
  authDomain: "netflix-gpt-58db8.firebaseapp.com",
  projectId: "netflix-gpt-58db8",
  storageBucket: "netflix-gpt-58db8.firebasestorage.app",
  messagingSenderId: "631689291376",
  appId: "1:631689291376:web:b9b279396939470e96f6b5",
  measurementId: "G-0X0PG5QP1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
