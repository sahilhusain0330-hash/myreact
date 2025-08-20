import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import reportWebVitals from './reportWebVitals';
import Applogin from './application/appauth/Applogin';
import Appregistor from './application/appauth/Appregistor';
import Userlogin from './application/user/auth/Userlogin';
import Userregistor from './application/user/auth/Userregistor';

// import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <reportWebVitals></reportWebVitals>
    <Applogin></Applogin>
    <Appregistor></Appregistor>
    <Userlogin></Userlogin>
    <Userregistor></Userregistor>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
