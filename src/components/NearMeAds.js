import React from "react";
import "./NearMeAds.css";
import cozy from "../images/hotel1.avif";
import luxury from "../images/hotel2.avif";
import charming from "../images/hotel3.avif";

const ads = [
  {
    title: "Cozy Cafe",
    description:
      "Enjoy a relaxing time at Cozy Cafe with delicious pastries and coffee.",
    imageUrl: cozy,
  },
  {
    title: "Luxury Hotel",
    description:
      "Experience luxury at its finest at Luxury Hotel with top-notch amenities.",
    imageUrl: luxury,
  },
  {
    title: "Charming Bistro",
    description:
      "Savor the best local dishes at Charming Bistro, a favorite among locals.",
    imageUrl: charming,
  },
];

const NearMeAds = () => {
  return (
    <div className="near-me-ads-container">
      <h3 className="title">Nearby Hotels & Cafes</h3>
      <p className="description">
        Discover the best places to visit nearby! We offer a selection of top
        hotels and cozy cafes that cater to various tastes and preferences.
      </p>
      <div className="ads-cards">
        {ads.map((ad, index) => (
          <div key={index} className="ad-card">
            <img src={ad.imageUrl} alt={ad.title} className="ad-image" />
            <div className="ad-content">
              <h4 className="ad-title">{ad.title}</h4>
              <p className="ad-description">{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearMeAds;
