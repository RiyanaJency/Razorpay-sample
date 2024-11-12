// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';


function Navbar() {
  return (
    <>
      <header className="header">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/Home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/betting" className="navbar-link">
              Betting Page
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Userprofile" className="navbar-link">
              User Profile
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/payment" className="navbar-link">
              Payment Integration
            </Link>
          </li>
        </ul>
      </header>
      
  
    </>
  );
}

export default Navbar;