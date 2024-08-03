// src/StudentDashboard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css'; // Ensure CSS is imported

function StudentDashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [complaint, setComplaint] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle complaint submission logic here
    alert('Complaint submitted');
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select a category</option>
          <option value="Academic">Academic</option>
          <option value="Administrative">Administrative</option>
          <option value="Faculty">Faculty</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="Logout" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
}

export default StudentDashboard;
