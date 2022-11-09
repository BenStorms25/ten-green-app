import React, { useEffect } from "react";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import "./styles/HomeContent.css";

function HomeContent() {
  // scale the globe on scroll
  useEffect(() => {
    const globeDiv = document.querySelector("#globe");

    window.addEventListener("scroll", function () {
      let scaler = window.scrollY / 2000;
      globeDiv.setAttribute("style", "transform: scale(" + (1 + scaler) + ");");
      // could add to this to fade in the map
    });
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
