import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styling/index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbu1fqvUoyrX91lEZkHOwErklYMYmhr54",
  authDomain: "ian-seto-portfolio.firebaseapp.com",
  projectId: "ian-seto-portfolio",
  storageBucket: "ian-seto-portfolio.appspot.com",
  messagingSenderId: "186142345078",
  appId: "1:186142345078:web:5bcb5ae9292e60b6445c57",
  measurementId: "G-1S1RT678BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
