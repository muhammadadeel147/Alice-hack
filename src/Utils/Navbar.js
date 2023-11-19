// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="digital-art-text">Digital Art</span>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="navbar-right">
     
      <Link to="/sign-in">
      <button className="signin-button">Sign In</button>
    </Link>
      </div>
    </div>
  );
};

export default Navbar;
