import React, { useEffect } from "react";
import Globe from "./Globe.js";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import infoIcon from "../images/info.png";
import "./styles/HomeContent.css";

function HomeContent() {
  // scale the globe on scroll

  return (
    <>
      <div className="center-div">
        <img src={tenGreenLogo} className="ten-green-logo" alt=""></img>
        <div className="info-div">
          <img src={infoIcon} alt="" className="info-icon"></img>
          <p className="hidden-info">
            The 10Green Score indicates the health of your environment using a
            number from 0 to 10. The higher the score, the healthier your
            environment.
            <br></br>
            <br></br>
            Factors that can reduce your score include unhealthy air quality
            readings and poor environmental monitoring.
          </p>
        </div>
      </div>
      <Globe />
    </>
  );
}

export default HomeContent;
