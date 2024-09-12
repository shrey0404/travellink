import React from "react";
import MapTracking from "./MapTracking";
import VideoCalling from "./VideoCalling";
import MessagingAndSOS from "./MessagingAndSOS";
import NearMeAds from "./NearMeAds";
import MyTripsCorner from "./MyTripsCorner";
import PlanMyTrips from "./PlanMyTrips";
import PeerTravelerTracking from "./PeerTravelerTracking";
import "./SeekerDashboard.css";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import Contact from "./Contact";

const SeekerDashboard = () => {
  return (
    <>
      <div className="seeker-dashboard">
        <h2>Seeker Dashboard</h2>
        <div className="section">
          <MapTracking />
        </div>
        <div className="section">
          <VideoCalling />
        </div>
        <div className="section">
          <NearMeAds />
        </div>
        <div className="section">
          <MyTripsCorner />
        </div>
        <div className="section">
          <PlanMyTrips />
        </div>
        <div className="section">
          <PeerTravelerTracking />
        </div>
        <div className="section">
          <MessagingAndSOS />
        </div>
      </div>
      <FeaturesSection />
      <PricingSection />
      <Contact />
    </>
  );
};

export default SeekerDashboard;
