import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/welcome', { replace: true });
        });
    };

    return (
        <div className="sign-in-container" style={{backgroundImage: `url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')`, height: '100vh'}}>
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br />
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default SignIn;