import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#020909' }}>
      <div className="grain-overlay" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}></div>
      <div className="crt-overlay" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}></div>
      <Sidebar />
      <div className="dashboard-main" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
