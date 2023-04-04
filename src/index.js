import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signin";
// import Splash from "./pages/splash";
import AuthDetails from "./firebase/authdetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <SignIn />
  <AuthDetails />
  {/* <Splash /> */}
  </BrowserRouter>
);