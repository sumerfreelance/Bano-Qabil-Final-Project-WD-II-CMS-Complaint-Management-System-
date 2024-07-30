// src/AdminDashboard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Ensure CSS is imported

function AdminDashboard() {
  const navigate = useNavigate();

  // Dummy data for the table
  const [complaints, setComplaints] = useState([
    { name: 'John Doe', email: 'john@example.com', category: 'Academic', complaint: 'Issue with grades', status: 'Pending' },
    { name: 'Jane Smith', email: 'jane@example.com', category: 'Administrative', complaint: 'Enrollment issue', status: 'Resolved' },
    // Add more dummy data as needed
  ]);

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  const handleResolve = (index) => {
    const newComplaints = [...complaints];
    newComplaints[index].status = 'Resolved';
    setComplaints(newComplaints);
  };

  const handleDelete = (index) => {
    const newComplaints = complaints.filter((_, i) => i !== index);
    setComplaints(newComplaints);
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={index}>
              <td>{complaint.name}</td>
              <td>{complaint.email}</td>
              <td>{complaint.category}</td>
              <td>{complaint.complaint}</td>
              <td>{complaint.status}</td>
              <td className="action-buttons">
                {complaint.status === 'Pending' ? (
                  <>
                    <button className="resolve-button" onClick={() => handleResolve(index)}>Resolve</button>
                    <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                  </>
                ) : (
                  'No actions available'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
