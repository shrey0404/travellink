import React from "react";
import "./MySeekersTrips.css";
import paris from "../images/paris.avif";
import tokyo from "../images/tokyo.avif";
import newyork from "../images/newyork.avif";

const seekers = [
  {
    id: 1,
    name: "John Doe",
    trip: "Trip to New York",
    date: "September 20th",
    imageUrl: newyork, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    trip: "Trip to Paris",
    date: "October 5th",
    imageUrl: paris, // Replace with actual image URL
  },
  {
    id: 3,
    name: "Alice Johnson",
    trip: "Trip to Tokyo",
    date: "November 15th",
    imageUrl: tokyo, // Replace with actual image URL
  },
];

const MySeekersTrips = () => {
  return (
    <div className="my-seekers-trips">
      <h3 className="title">My Seekers & Their Upcoming Trips</h3>
      <div className="seekers-list">
        {seekers.map((seeker) => (
          <div key={seeker.id} className="seeker-card">
            <img
              src={seeker.imageUrl}
              alt={seeker.trip}
              className="seeker-image"
            />
            <div className="seeker-info">
              <h4 className="seeker-name">{seeker.name}</h4>
              <p className="seeker-trip">
                {seeker.trip} on {seeker.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySeekersTrips;
