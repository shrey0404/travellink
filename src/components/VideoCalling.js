import React from "react";
import "./VideoCalling.css";

const VideoCalling = () => {
  return (
    <div className="video-calling">
      <button className="video-button google-meet">
        Start Google Meet Call
      </button>
      <button className="video-button whatsapp">Start WhatsApp Call</button>
    </div>
  );
};

export default VideoCalling;
