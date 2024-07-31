// src/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const complaints = [
    { name: 'John Doe', email: 'john@example.com', category: 'Academic', complaint: 'Issue with grades', status: 'pending' },
    { name: 'Jane Smith', email: 'jane@example.com', category: 'Administrative', complaint: 'Enrollment issue', status: 'resolved' },
    { name: 'Alice Johnson', email: 'alice@example.com', category: 'Technical', complaint: 'Website bug', status: 'deleted' },
    // Add more dummy data as needed
  ];

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = '/logout';
  };

  return (
    <div className="admin-dashboard">
      <div className="header">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      <div className="complaints-list">
        <div className="complaints-section">
          <h4>Pending Complaints</h4>
          <table className="table">
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
              {complaints.filter(c => c.status === 'pending').map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.name}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.complaint}</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <a href={`/resolve_complaint?id=${index}`} className="btn btn-success btn-sm">Resolve</a>
                    <a href={`/delete_complaint?id=${index}`} className="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="complaints-section">
          <h4>Resolved Complaints</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Category</th>
                <th>Complaint</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.filter(c => c.status === 'resolved').map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.name}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.complaint}</td>
                  <td><span className="badge badge-success">Resolved</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="complaints-section">
          <h4>Deleted Complaints</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Category</th>
                <th>Complaint</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.filter(c => c.status === 'deleted').map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.name}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.complaint}</td>
                  <td><span className="badge badge-danger">Deleted</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
