// src/StatusDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StatusDashboard.css'; // Ensure CSS is imported

function StatusDashboard() {
  const navigate = useNavigate();

  // Replace this with real data fetching logic
  const complaints = [
    { id: '1', category: 'Academic', status: 'Resolved' },
    { id: '2', category: 'Administrative', status: 'Pending' },
  ];

  const handleLogout = () => {
    // Clear any authentication state or token here if needed
    // For example, if using localStorage:
    // localStorage.removeItem('authToken');

    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h1>Your Complaints</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.category}</td>
              <td>{complaint.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default StatusDashboard;
