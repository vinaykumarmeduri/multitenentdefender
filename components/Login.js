import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to authentication endpoint
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      // If login is successful, save email in local storage and redirect to home page
      if (response.status === 200) {
        localStorage.setItem('email', email); // Save email in local storage
        window.location.href = '/home';
      }
    } catch (error) {
      // If there's an error (e.g., invalid credentials), handle it here
      console.error('Login error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="app-name text-center mb-4">Multi Tenant Defender</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="loginEmail" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
        {error && <div className="text-danger mt-3">{error}</div>}
      </form>
      <div className="mt-3 text-center">
        <p>Don't have an account? <Link to="/">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
