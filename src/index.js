import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
//import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
  apiKey: "AIzaSyCmNKR3oObDDsyTpNZ1AhvWgrdZO1Zg0i8",
  authDomain: "vinylustore.firebaseapp.com",
  projectId: "vinylustore",
  storageBucket: "vinylustore.appspot.com",
  messagingSenderId: "1088408288184",
  appId: "1:1088408288184:web:a5c1f4422f0b8f26956d4d"
};

const app = initializeApp(firebaseConfig);
const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
