import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(response);
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <div>
      <h1>Sign In</h1>
      {error && <div>{error}</div>}
      <form onSubmit={signInWithEmailAndPassword}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;