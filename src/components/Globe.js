import React, { useEffect, useState } from "react";
import "./styles/Globe.css";
import globeImage from "../images/10Green Concept 3 Globe-01.png";
import MapApp from "../Interactive-Map-Source";
import FilterMaps from "./FilterMaps.js";

function Globe() {
  // options to filter by pollutant
  const mapOptions = [
    { value: "", text: "--Filter By--" },
    { value: "ozone", text: "Ozone" },
    { value: "nitrogen", text: "Nitrogen" },
    { value: "co2", text: "CO2" },
  ];

  const [currentMap, setCurrentMap] = React.useState("");

  // scale globe and transition to map on scroll
  function scaleAndTransitionGlobe() {
    const globeDiv = document.querySelector("#globe");
    const globeImage = document.querySelector("#globe-image");
    let interactiveMapImage = document.querySelector("#interactive-map-svg");
    let filterByMaps = document.querySelector("#filter-maps-div");

    window.addEventListener("scroll", function () {
      // 2000 worked well for the scaling
      let scaler = window.scrollY / 2000;
      let opacity = 1;
      if (window.scrollY < 700) {
        // 0 to 800 scrollY, scale globe
        globeDiv.setAttribute(
          "style",
          "transform: scale(" + (1 + scaler) + ");"
        );

        opacity = 1 - window.scrollY / 650;
        globeImage.setAttribute("style", "opacity: " + opacity + ";");

        // having trouble with grabbing the map with the queryselector
        if (!interactiveMapImage) {
          interactiveMapImage = document.querySelector("#interactive-map-svg");
        }
        interactiveMapImage.style.opacity = 1 - opacity;

        if (!filterByMaps) {
          filterByMaps = document.querySelector("#filter-maps-div");
        }
        filterByMaps.style.opacity = 1 - opacity;
      } else {
        // set globe div to overflow hidden
        globeDiv.setAttribute("style", "transform: scale(" + 1.35 + ");");
      }
    });
  }

  useEffect(() => {
    scaleAndTransitionGlobe();
    // make size of the page
  });

  return (
    <div className="globe-div">
      <div id="globe">
        <img id="globe-image" src={globeImage} alt=""></img>

        <MapApp />
      </div>
      <div id="filter-maps-div">
        <FilterMaps
          currentMap={currentMap}
          setCurrentMap={setCurrentMap}
          mapOptions={mapOptions}
        />
      </div>
    </div>
  );
}

export default Globe;
