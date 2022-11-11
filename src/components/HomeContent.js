import React, { useEffect } from "react";
import Globe from "./Globe.js";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import "./styles/HomeContent.css";

function HomeContent() {
  // scale the globe on scroll

  return (
    <>
      <div className="center-div">
        <img src={tenGreenLogo} alt=""></img>
      </div>
      <Globe />
    </>
  );
}

export default HomeContent;
