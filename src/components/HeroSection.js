// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css"; // Add styles for the hero section

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TravelLink - Your Journey, Our Watch</h1>
        <p>Connect with friends and family while you explore the world.</p>
        <button className="cta-button">Join as Seeker</button>
        <button className="cta-button">Join as Watcher</button>
      </div>
    </section>
  );
};

export default HeroSection;
