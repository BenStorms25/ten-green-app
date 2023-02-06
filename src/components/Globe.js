import React, { useEffect, useState } from "react";
import "./styles/Globe.css";
import globeImage from "../images/10Green Concept 3 Globe-01.png";
import FilterMaps from "./FilterMaps.js";
import InteractiveMap from "./InteractiveMap";

function Globe() {
  // scale globe and transition to map on scroll
  function scaleAndTransitionGlobe() {
    const globeDiv = document.querySelector("#globe");
    const globeImage = document.querySelector("#globe-image");

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

        opacity = 1 - window.scrollY / 600;
        globeImage.setAttribute("style", "opacity: " + opacity + ";");
      } else {
        // set globe div to overflow hidden
        globeDiv.setAttribute("style", "transform: scale(" + 1.35 + ");");
      }
    });
  }

  useEffect(() => {
    scaleAndTransitionGlobe();
  });

  return (
    <>
      <div className="globe-div">
        <div id="globe">
          <img id="globe-image" src={globeImage} alt=""></img>
        </div>
      </div>
      <div className="interactive-map-container">
        <InteractiveMap />
      </div>
    </>
  );
}

export default Globe;
