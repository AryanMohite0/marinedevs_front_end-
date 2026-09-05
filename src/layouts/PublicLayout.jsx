import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PublicLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '72px', backgroundColor: '#020909' }}>
      <div className="grain-overlay" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}></div>
      <div className="crt-overlay" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}></div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
