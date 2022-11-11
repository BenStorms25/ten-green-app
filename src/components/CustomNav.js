import React from "react";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import "./styles/CustomNav.css";

function CustomNav() {
  return (
    <div className="navbar">
      <img src={tenGreenLogo} alt="" className="navbar-logo"></img>
      <div className="nav">
        <a className="custom-nav-link" href="/">
          Home
        </a>
        <a className="custom-nav-link" href="data">
          Data
        </a>
        <a className="custom-nav-link" href="pollutants">
          Pollutants
        </a>
        <a className="custom-nav-link" href="standards">
          Standards
        </a>
        <a className="custom-nav-link" href="ozone">
          Ozone
        </a>
        <a className="custom-nav-link" href="about">
          About
        </a>
      </div>
    </div>
  );
}

export default CustomNav;
