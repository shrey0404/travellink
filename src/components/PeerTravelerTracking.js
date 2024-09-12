import React from "react";
import "./PeerTravelerTracking.css"; // Create this CSS file for styling
import paris from "../images/paris.avif";
import tokyo from "../images/tokyo.avif";
import newyork from "../images/newyork.avif";

const travelers = [
  {
    name: "John Doe",
    frequentPlace: "Paris, France",
    visits: 5,
    imgUrl: paris, // Replace with actual images
  },
  {
    name: "Jane Smith",
    frequentPlace: "Tokyo, Japan",
    visits: 3,
    imgUrl: tokyo, // Replace with actual images
  },
  {
    name: "Alice Johnson",
    frequentPlace: "New York, USA",
    visits: 7,
    imgUrl: newyork, // Replace with actual images
  },
];

const PeerTravelerTracking = () => {
  return (
    <div className="peer-tracker-container">
      <h3>Peer Traveler Tracking</h3>
      <p>Track co-travelers within the app here.</p>
      <div className="card-container">
        {travelers.map((traveler, index) => (
          <div key={index} className="card">
            <img
              src={traveler.imgUrl}
              alt={traveler.name}
              className="card-image"
            />
            <div className="card-content">
              <h4>{traveler.name}</h4>
              <p>Frequent Place: {traveler.frequentPlace}</p>
              <p>Number of Visits: {traveler.visits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerTravelerTracking;
