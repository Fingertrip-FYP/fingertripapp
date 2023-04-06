import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from "./pages/signin";
import Splash from "./pages/splash";
import AuthDetails from "./firebase/authdetails";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="signin" element={ <SignIn /> } />    
                <Route path="/*" element={ <Splash /> } />    
            </Routes>
        </div>
    );
}