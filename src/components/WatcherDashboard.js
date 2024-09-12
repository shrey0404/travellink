import React from "react";
import UnlimitedTracking from "./UnlimitedTracking";
import VideoCalling from "./VideoCalling";
import NearMeAds from "./NearMeAdsWatcher";
import MySeekersTrips from "./MySeekersTrips";
import "./WatcherDashboard.css";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import Contact from "./Contact";

const WatcherDashboard = () => {
  return (
    <>
      <div className="watcher-dashboard">
        <h2>Watcher Dashboard</h2>
        <div className="section">
          <UnlimitedTracking />
        </div>
        <div className="section">
          <VideoCalling />
        </div>
        <div className="section">
          <NearMeAds />
        </div>
        <div className="section">
          <MySeekersTrips />
        </div>
      </div>
      <FeaturesSection />
      <PricingSection />
      <Contact />
    </>
  );
};

export default WatcherDashboard;
