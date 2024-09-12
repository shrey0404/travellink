import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./UnlimitedTracking.css";

const center = [51.505, -0.09]; // Latitude and Longitude for the center of the map

const UnlimitedTracking = () => {
  return (
    <div className="map-container">
      <MapContainer center={center} zoom={10} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>A sample marker on OpenStreetMap.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default UnlimitedTracking;
