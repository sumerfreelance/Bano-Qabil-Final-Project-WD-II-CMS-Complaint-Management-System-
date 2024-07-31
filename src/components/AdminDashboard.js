import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const initialComplaints = [
    { id: 1, name: 'John Doe', email: 'john@example.com', category: 'Academic', complaint: 'Issue with grades', status: 'pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', category: 'Administrative', complaint: 'Enrollment issue', status: 'resolved' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', category: 'Technical', complaint: 'Website bug', status: 'deleted' },
    // Add more dummy data as needed
  ];

  const [complaints, setComplaints] = useState(initialComplaints);

  const handleLogout = () => {
    // Handle logout logic here
    // This can be an API call to logout, or just redirecting
    window.location.href = '/';
  };

  const resolveComplaint = (id) => {
    setComplaints(complaints.map(c =>
      c.id === id
        ? { ...c, status: 'resolved' }
        : c
    ));
  };

  const deleteComplaint = (id) => {
    setComplaints(complaints.map(c =>
      c.id === id
        ? { ...c, status: 'deleted' }
        : c
    ));
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
              {complaints.filter(c => c.status === 'pending').map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.name}</td>
                  <td>{complaint.email}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.complaint}</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-success btn-sm" onClick={() => resolveComplaint(complaint.id)}>Resolve</button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteComplaint(complaint.id)}>Delete</button>
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
              {complaints.filter(c => c.status === 'resolved').map((complaint) => (
                <tr key={complaint.id}>
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
              {complaints.filter(c => c.status === 'deleted').map((complaint) => (
                <tr key={complaint.id}>
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
