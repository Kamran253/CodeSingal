import React, { useState } from 'react';
import {  Link} from 'react-router-dom';
 
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
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>  
        <li>  <Link to="/" activeClassName="active-link">Home</Link></li>
        <li>  <Link to="/Products" activeClassName="active-link">Products</Link></li>
        <li><Link to="/solutions"  activeClassName="active-link">Solutions</Link></li>
        <li><Link to="/resources" activeClassName="active-link">Resources</Link></li>
        <li><Link to="/company" activeClassName="active-link">Company</Link></li>
        <li><Link to="/pricing" activeClassName="active-link">Pricing</Link></li>
        <li><Link to="/forindividuals" activeClassName="active-link">For Individuals</Link></li>
        <li><Link to="/login" activeClassName="active-link">Log In</Link></li>
      </div>
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
