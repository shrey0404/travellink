import React from "react";
import "./NearMeAdsWatcher.css";
import cafe from "../images/hotel3.avif";
import hotel from "../images/hotel2.avif";

const ads = [
  {
    id: 1,
    title: "Nearby Cafe",
    description:
      "Enjoy a relaxing coffee break at our nearby cafe. Freshly brewed coffee and delightful pastries await you!",
    imageUrl: cafe, // Directly use the image URL
  },
  {
    id: 2,
    title: "Nearby Hotel",
    description:
      "Book a comfortable stay at our nearby hotel. Enjoy luxury rooms and top-notch amenities.",
    imageUrl: hotel, // Directly use the image URL
  },
];

const NearMeAdsWatcher = () => {
  return (
    <div className="near-me-ads">
      {ads.map((ad) => (
        <div key={ad.id} className="ad-item">
          <img src={ad.imageUrl} alt={ad.title} className="ad-image" />
          <h4 className="ad-title">{ad.title}</h4>
          <p className="ad-description">{ad.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NearMeAdsWatcher;
