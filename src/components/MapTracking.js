import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapTracking.css"; // Create this CSS file for styling

const center = [51.505, -0.09]; // Latitude and Longitude for the center of the map

const MapTracking = () => {
  return (
    <MapContainer center={center} zoom={13} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>A sample marker on OpenStreetMap.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapTracking;
