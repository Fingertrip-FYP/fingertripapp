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
        <div 
        className="sign-in-container"
        style={{
            backgroundImage: `url('https://drive.google.com/uc?export=view&id=1bKZd4kdvh04fw9y85qARw8uYpJhNZ2y2')`,
            height: '100vh',
            color: '#36454F'
            }}>
            
            {/* Sign In Text */}
            <form onSubmit={signIn}>
                <h1
                style={{
                    position: 'absolute',
                    width: '102px',
                    height: '45px',
                    left: '30px',
                    top: '55px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '30px',
                    lineHeight: '45px',
                    textAlign: 'center',
                    color: '#36454F',
                }}>Sign In</h1>

                {/* Enter User ID */}
                <div
                style={{
                    position: 'absolute',
                    width: '327px',
                    height: '64px',
                    left: '30px',
                    top: '244px',
                }}>
                    <p
                    style={{
                        position: 'absolute',
                        left: '0%',
                        top: '0%',
                        bottom: '68.75%',
                    }}>User ID</p>
                    <input
                    type="email"
                    placeholder="Enter your User ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        color: '#36454F',
                        background: 'transparent',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        padding: '16px 0px 0px',
                        gap: '10px',
                        position: 'absolute',
                        height: '36px',
                        left: '0%',
                        right: '0%',
                        top: 'calc(50% - 36px/2 + 14px)',
                        outline: '0',
                        borderWidth: '0px 0px 2px',
                        borderColor: '#36454F',
                        borderRadius: '8px',
                    }}
                    ></input>
                </div>
                
                {/* Enter Password */}
                <div
                style={{
                    position: 'absolute',
                    width: '327px',
                    height: '64px',
                    left: '30px',
                    top: '350px',
                }}>
                    <p
                    style={{
                        position: 'absolute',
                        left: '0%',
                        top: '0%',
                        bottom: '68.75%',
                    }}>Password</p>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        color: '#36454F',
                        background: 'transparent',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        padding: '12px 0px 0px',
                        gap: '10px',
                        position: 'absolute',
                        height: '36px',
                        left: '0%',
                        right: '0%',
                        top: 'calc(50% - 36px/2 + 14px)',
                        outline: '0',
                        borderWidth: '0px 0px 2px',
                        borderColor: '#36454F',
                        borderRadius: '8px',
                    }}
                    ></input>
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '13px 50px',
                    gap: '10px',
                    position: 'absolute',
                    width: '345px',
                    height: '50px',
                    left: '24px',
                    top: '456px',
                    background: '#1200DD',
                    color: '#FAF9F6',
                    borderRadius: '8px',
                }}>Login</button>
            </form>
        </div>
    );
};

export default SignIn;