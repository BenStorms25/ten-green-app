import React, { useEffect, useState } from "react";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import umaineLogo from "../images/UMaine_fullcrest_logo4c_reverse.png";
import climateChangeLogo from "../images/climateChangeWhite.png";

import "./styles/CustomNav.css";

function CustomNav() {
  function collapseNav() {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    let navbarLinks = document.getElementsByClassName("navbar-links")[0];

    navbarLinks.classList.toggle("active");
  }

  return (
    <nav className="navbar" id="navID">
      <div className="mobile-header">
        <img src={tenGreenLogo} alt="" className="navbar-logo"></img>
        <img className="mobile-logo" alt="" src={climateChangeLogo}></img>
        <img className="mobile-logo" alt="" src={umaineLogo}></img>
      </div>

      <a href="#" className="toggle-button" onClick={collapseNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/data">Data</a>
          </li>
          <li>
            <a href="/pollutants">Pollutants</a>
          </li>
          <li>
            <a href="/standards">Standards</a>
          </li>
          <li>
            <a href="/ozone">Ozone</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNav;
