// src/FrontPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="container">
      <h1 className="h1-main">Complaint Management System</h1>
      <div className="button-container">
        <Link to="/admin-login" className="btn-FP">Admin Login</Link>
        <Link to="/student-login" className="btn-FP">Student Login</Link>
        <Link to="/view-status" className="btn-FP">View Status</Link>
      </div>
    </div>
  );
};

export default FrontPage;
