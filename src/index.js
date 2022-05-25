import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);