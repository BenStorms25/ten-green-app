import React, { useEffect } from "react";
import "./styles/Globe.css";
import globeImage from "../images/10 Green Globe Green Cream 1.png";
import MapApp from "../Interactive-Map-Source";

function Globe() {
  // scale globe and transition to map on scroll
  function scaleAndTransitionGlobe() {
    const globeDiv = document.querySelector("#globe");
    const globeImage = document.querySelector("#globe-image");
    let interactiveMapImage = document.querySelector("#interactive-map-svg");

    window.addEventListener("scroll", function () {
      // 2000 worked well for the scaling
      let scaler = window.scrollY / 2000;
      let opacity = 1;

      if (window.scrollY < 850) {
        // 0 to 800 scrollY, scale globe
        globeDiv.setAttribute(
          "style",
          "transform: scale(" + (1 + scaler) + ");"
        );

        opacity = 1 - window.scrollY / 850;
        globeImage.setAttribute("style", "opacity: " + opacity + ";");

        // having trouble with grabbing the map with the queryselector
        if (!interactiveMapImage) {
          interactiveMapImage = document.querySelector("#interactive-map-svg");
        }
        interactiveMapImage.style.opacity = 1 - opacity;
      } else {
        // after 1200 scrollY, reverse process
        globeDiv.setAttribute(
          "style",
          "transform: scale(" + (1.35 - (scaler - 0.5)) + ");"
        );
        //reverse process for opacity
        opacity = (window.scrollY - 850) / 850;
        globeImage.setAttribute("style", "opacity: " + opacity + ";");
      }

      // having trouble with grabbing the map with the queryselector
      if (!interactiveMapImage) {
        interactiveMapImage = document.querySelector("#interactive-map-svg");
      }
      interactiveMapImage.style.opacity = 1 - opacity;
    });
  }

  useEffect(() => {
    scaleAndTransitionGlobe();
  });

  return (
    <div className="globe-div">
      <div id="globe">
        <img id="globe-image" src={globeImage} alt=""></img>
        <MapApp />
      </div>
    </div>
  );
}

export default Globe;
