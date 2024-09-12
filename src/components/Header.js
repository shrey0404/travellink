// src/components/Header.js
import React from "react";
import { Link } from "react-scroll"; // Import for smooth scrolling
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">TravelLink</div>
      <nav className="nav">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="features" smooth={true} duration={500}>
          Features
        </Link>
        <Link to="pricing" smooth={true} duration={500}>
          Pricing
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        <button className="login-button">Login</button>
      </nav>
    </header>
  );
};

export default Header;
