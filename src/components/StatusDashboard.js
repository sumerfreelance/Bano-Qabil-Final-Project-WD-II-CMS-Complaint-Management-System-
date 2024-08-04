// src/StatusDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StatusDashboard.css';

function StatusDashboard() {
  const navigate = useNavigate();

  const complaints = [
    { id: 1, name: 'John Doe', category: 'Academic', complaint: 'Issue with grades', status: 'pending' },
    { id: 2, name: 'Jane Smith', category: 'Administrative', complaint: 'Enrollment issue', status: 'resolved' },
    { id: 3, name: 'Alice Johnson', category: 'Technical', complaint: 'Website bug', status: 'deleted' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h1>Your Complaints</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Complaint</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.name}</td>
              <td>{complaint.category}</td>
              <td>{complaint.complaint}</td>
              <td>{complaint.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="Logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default StatusDashboard;
