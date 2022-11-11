import React, { useEffect } from "react";
import "./styles/Globe.css";
import globeImage from "../images/10 Green Globe Green Cream 1.png";

function Globe() {
  // scale globe and transition to map on scroll
  function scaleAndTransitionGlobe() {
    const globeDiv = document.querySelector("#globe");
    const globeImage = document.querySelector("#globe-image");

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
        globeImage.setAttribute("style", "opacity: " + { opacity } + ";");
      } else {
        // after 1200 scrollY, reverse process
        globeDiv.setAttribute(
          "style",
          "transform: scale(" + (1.35 - (scaler - 0.5)) + ");"
        );
      }

      // could add to this to fade in the map
    });
  }

  useEffect(() => {
    scaleAndTransitionGlobe();
  });

  return (
    <div className="globe-div">
      <div id="globe">
        <img id="globe-image" src={globeImage} alt=""></img>
      </div>
    </div>
  );
}

export default Globe;
