import React, { useState } from 'react';
import { auth } from './firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
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