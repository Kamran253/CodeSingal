import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import eagle from '../Images/eagle.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={eagle} alt="Logo" className="logo" />
        CodeSignal
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" activeClassName="active-link" exact>Home</NavLink></li>
        <li><NavLink to="/Products" activeClassName="active-link">Products</NavLink></li>
        <li><NavLink to="/solutions" activeClassName="active-link">Solutions</NavLink></li>
        <li><NavLink to="/resources" activeClassName="active-link">Resources</NavLink></li>
        <li><NavLink to="/company" activeClassName="active-link">Company</NavLink></li>
        <li><NavLink to="/pricing" activeClassName="active-link">Pricing</NavLink></li>
        <li><NavLink to="/forindividuals" activeClassName="active-link">For Individuals</NavLink></li>
        <li><NavLink to="/login" activeClassName="active-link">Log In</NavLink></li>
      </ul>
      <button className="button">Get Started</button>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
