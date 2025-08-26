
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-hamburger" onClick={handleToggle} aria-label="Toggle navigation" tabIndex={0} role="button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleClose}>Home</Link></li>
        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={handleClose}>My Services</Link></li>
        <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} onClick={handleClose}>Portfolio</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleClose}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
