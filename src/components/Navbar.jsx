import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/technology', label: 'Technology' },
    { to: '/impact', label: 'Impact' },
  ];

  const linkClass = ({ isActive }) => 'navbar-link' + (isActive ? ' active' : '');

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
        <div className="navbar-mark">MG</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <strong>MARINE GUARD</strong>
          <em style={{ fontFamily: "'IM Fell English SC', serif", fontSize: '13px', color: '#e7dda9', fontStyle: 'normal' }}>
            ABYSSAL OBSERVATORY
          </em>
        </div>
      </Link>

      <span className="navbar-live" style={{ marginLeft: '18px' }}>● LIVE FEED</span>

      {/* Desktop nav */}
      <div className="navbar-links">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
        <Link to="/login" className="btn-gold" style={{ textDecoration: 'none', fontSize: '16px', padding: '8px 18px' }}>
          SET SAIL ⚓
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        style={{ background: 'none', border: 'none', color: '#e2cb7b', cursor: 'pointer', padding: '4px', marginLeft: 'auto' }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="mobile-nav-link" onClick={closeMenu} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="btn-gold"
            onClick={closeMenu}
            style={{ textDecoration: 'none', textAlign: 'center', marginTop: '16px' }}
          >
            SET SAIL ⚓
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
