import React from "react";
import "./PlanMyTrips.css";
import europe from "../images/europe.avif";
import asia from "../images/asia.avif";

const plans = [
  {
    id: 1,
    title: "Explore Europe",
    description:
      "Plan a comprehensive trip across major European cities, including Paris, Rome, and Berlin.",
    imageUrl: europe, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Adventure in Asia",
    description:
      "Create an adventure-filled itinerary covering destinations like Tokyo, Bangkok, and Seoul.",
    imageUrl: asia, // Replace with actual image URL
  },
];

const PlanMyTrips = () => {
  return (
    <div className="plan-my-trips">
      <h3 className="title">Plan My Trips</h3>
      <p className="description">
        Explore our simplified trip planning suggestions to help you organize
        your next adventure. Click on each plan to learn more.
      </p>
      <div className="plans-list">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-item">
            <img src={plan.imageUrl} alt={plan.title} className="plan-image" />
            <h4 className="plan-title">{plan.title}</h4>
            <p className="plan-description">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanMyTrips;
