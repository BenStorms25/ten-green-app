import React, { useEffect } from "react";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import "./styles/HomeContent.css";

function HomeContent() {
  // scale the globe on scroll

  function scaleGlobe() {
    const globeDiv = document.querySelector("#globe");

    window.addEventListener("scroll", function () {
      // 2000 worked well for the scaling
      let scaler = window.scrollY / 2000;
      if (window.scrollY < 850) {
        // 0 to 800 scrollY, scale globe
        globeDiv.setAttribute(
          "style",
          "transform: scale(" + (1 + scaler) + ");"
        );
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
    scaleGlobe();
  });

  return (
    <>
      <div className="center-div">
        <img src={tenGreenLogo} alt=""></img>
      </div>
      <div className="globe-div">
        <div id="globe"></div>
      </div>
    </>
  );
}

export default HomeContent;
