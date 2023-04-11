import React from "react";
import tenGreenLogo from "../images/10Green-Logo-Black-(1).png";
import umaineLogo from "../images/UMaine_fullcrest_logo4c_reverse.png";
import climateChangeLogo from "../images/climateChangeWhite.png";
import { HashLink } from "react-router-hash-link";
import "./styles/CustomNav.css";

function CustomNav() {
  // collapse nav bar links after certain screen width
  function collapseNav() {
    let navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  }

  return (
    <nav className="navbar" id="navID">
      <div className="mobile-header">
        <HashLink to="/">
          <img src={tenGreenLogo} alt="" className="navbar-logo"></img>
        </HashLink>
        <img className="mobile-logo" alt="" src={climateChangeLogo}></img>
        <img className="mobile-logo" alt="" src={umaineLogo}></img>
      </div>

      <a href className="toggle-button" onClick={collapseNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <HashLink to="/#interactive-map">Score Map</HashLink>
          </li>
          <li>
            <HashLink to="/pollutants-and-standards">
              Pollutants & Standards
            </HashLink>
          </li>
          <li>
            <HashLink to="/aq-forecast">AQ Forecast</HashLink>
          </li>
          <li>
            <HashLink to="/about">About</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNav;
