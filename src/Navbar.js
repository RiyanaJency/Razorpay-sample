import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
            Home
        </li>
        <li className="navbar-item">
            Betting Page
        </li>
        <li className="navbar-item">
            User Profile
        </li>
        <li className="navbar-item">
            Payment Integration
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
