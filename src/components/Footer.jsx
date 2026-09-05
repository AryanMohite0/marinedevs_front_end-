import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="site-footer" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#020909', borderTop: '1px solid #7f8565', color: '#788c7b', fontFamily: 'VT323, monospace' }}>
      <div className="footer-left">
        SONAR // 18° 43′ N, 69° 08′ W  ·  DEPTH : 3842M  ·  WATER TEMP : 3.8°C
      </div>
      <div className="footer-right" style={{ display: 'flex', gap: '15px' }}>
        <Link to="/dashboard" style={{ color: '#cec386', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/surveys" style={{ color: '#cec386', textDecoration: 'none' }}>Surveys</Link>
        <Link to="/reports" style={{ color: '#cec386', textDecoration: 'none' }}>Reports</Link>
      </div>
    </footer>
  );
};

export default Footer;
