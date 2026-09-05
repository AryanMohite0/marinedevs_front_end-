import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ScanSearch, Map, Anchor, FileBarChart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="navbar-mark">MG</div>
        <div>
          <strong style={{ fontSize: '16px', display: 'block' }}>MARINE GUARD</strong>
          <small style={{ fontFamily: 'VT323', color: '#718c82' }}>Ghost Tide v2.0</small>
        </div>
      </div>

      <nav style={{ flex: 1, marginTop: '30px' }}>
        <NavLink to="/dashboard" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
          <LayoutDashboard size={18} style={{ marginRight: '10px' }} />
          Command Center
        </NavLink>
        <NavLink to="/surveys" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
          <ScanSearch size={18} style={{ marginRight: '10px' }} />
          Surveys
        </NavLink>
        <NavLink to="/map" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
          <Map size={18} style={{ marginRight: '10px' }} />
          Marine Map
        </NavLink>
        <NavLink to="/missions" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
          <Anchor size={18} style={{ marginRight: '10px' }} />
          Cleanup Missions
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
          <FileBarChart size={18} style={{ marginRight: '10px' }} />
          Reports
        </NavLink>
      </nav>

      <div className="sidebar-user" style={{ padding: '20px', borderTop: '1px solid #7f856540' }}>
        <div style={{ marginBottom: '10px' }}>
          <div style={{ color: '#f0e4b4', fontFamily: 'VT323, monospace' }}>{user?.name || 'Captain'}</div>
          <div style={{ color: '#788c7b', fontSize: '14px', fontFamily: 'VT323, monospace' }}>{user?.role || 'Commander'}</div>
        </div>
        <button className="btn-ghost" onClick={handleLogout} style={{ fontSize: '14px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <LogOut size={14} /> DISCONNECT
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
