import React from "react";
import "./MessagingAndSOS.css";

const MessagingAndSOS = () => {
  const sendSOS = () => {
    window.open("https://wa.me/?text=SOS%20Help%20me!", "_blank");
  };

  return (
    <div className="messaging-sos-container">
      <h3 className="title">Messaging and SOS</h3>
      <button className="sos-button" onClick={sendSOS}>
        Send SOS
      </button>
    </div>
  );
};

export default MessagingAndSOS;
