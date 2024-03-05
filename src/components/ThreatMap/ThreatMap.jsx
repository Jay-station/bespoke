import React from "react";
import "./ThreatMap.scss";

const ThreatMap = () => {
  return (
    <div className="map__container">
      <iframe
        className="map__iframe"
        src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
        title="Threat Map"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ThreatMap;
