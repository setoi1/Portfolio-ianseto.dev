import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import App from './App';
import './styling/index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyDbu1fqvUoyrX91lEZkHOwErklYMYmhr54',
  authDomain: 'ian-seto-portfolio.firebaseapp.com',
  projectId: 'ian-seto-portfolio',
  storageBucket: 'ian-seto-portfolio.appspot.com',
  messagingSenderId: '186142345078',
  appId: '1:186142345078:web:5bcb5ae9292e60b6445c57',
  measurementId: 'G-1S1RT678BC'
};

// Initialize Firebase and use as necessary
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
