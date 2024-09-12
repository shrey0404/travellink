import React from "react";
import "./MyTripsCorner.css";
import paris from "../images/paris.avif";
import tokyo from "../images/tokyo.avif";

const trips = [
  {
    id: 1,
    title: "Trip to Paris",
    description:
      "A wonderful journey exploring the Eiffel Tower and Louvre Museum.",
    imageUrl: paris, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Trip to Tokyo",
    description:
      "An exciting adventure through Tokyo's bustling streets and historic temples.",
    imageUrl: tokyo, // Replace with actual image URL
  },
];

const MyTripsCorner = () => {
  return (
    <div className="my-trips-corner">
      <h3 className="title">My Trips Corner</h3>
      <p className="description">
        View your past travels and explore the memories from your adventures.
        Click on each trip to see more details.
      </p>
      <div className="trips-list">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-item">
            <img src={trip.imageUrl} alt={trip.title} className="trip-image" />
            <h4 className="trip-title">{trip.title}</h4>
            <p className="trip-description">{trip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTripsCorner;
