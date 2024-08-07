// src/StudentLogin.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function StudentLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id === 'student' && password === 'password') {
      navigate('/student-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="button-container">
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;
