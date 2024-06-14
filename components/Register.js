import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Import custom CSS file

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);
      // Redirect to login page or handle success message
      window.location.href = '/Login';
    } catch (error) {
      console.error(error);
      // Handle error message
    }
  };

  return (
    <div className="container mt-5">
      {/* App Name */}
      <h1 className="app-name text-center mb-4">Multi Tenant Defender</h1>
      
      {/* Register Form */}
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="mb-3">
          <label htmlFor="registerName" className="form-label">Name</label>
          <input type="text" className="form-control" id="registerName" name="name" value={formData.name} onChange={handleChange} />
        </div>
        {/* Email input */}
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        {/* Password input */}
        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="registerPassword" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
      </form>
      
      {/* Link to Login */}
      <div className="mt-3 text-center">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
