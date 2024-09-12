import React from "react";
import "./FeaturesSection.css"; // Ensure you add the styles for the features section
import auth from "../images/auth.avif";
import calling from "../images/calling.avif";
import tracking from "../images/tracking.avif";

const features = [
  {
    id: 1,
    title: "User Authentication",
    description: "Seamless login via Google, Apple, and other accounts.",
    imageUrl: auth, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Real-Time Tracking",
    description: "Track your journey and your friends' locations with ease.",
    imageUrl: tracking, // Replace with actual image URL
  },
  {
    id: 3,
    title: "Video Calling & Messaging",
    description: "Stay connected with video calls and messages.",
    imageUrl: calling, // Replace with actual image URL
  },
];

const FeaturesSection = () => {
  return (
    <section className="features" id="features">
      <h2 className="features-title">Features</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="feature-image"
            />
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
