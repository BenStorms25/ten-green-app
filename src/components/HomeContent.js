import React from "react";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import "./HomeContent.css";

function HomeContent() {
  return (
    <>
      <div className="center-div">
        <img src={tenGreenLogo}></img>
      </div>
      <div className="globe-div">
        <div className="globe"></div>
      </div>
    </>
  );
}

export default HomeContent;
