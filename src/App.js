// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import StudentLogin from './components/StudentLogin';
import StudentDashboard from './components/StudentDashboard';
import ViewStatus from './components/ViewStatus';
import StatusDashboard from './components/StatusDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/view-status" element={<ViewStatus />} />
        <Route path="/status-dashboard" element={<StatusDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
