// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Add styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 TravelLink. All rights reserved.</p>
      <div className="social-media">
        <a href="https://twitter.com">Twitter</a>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
