import React from "react";
import CustomNav from "./CustomNav";
import umaineLogo from "../images/UMaine_fullcrest_logo4c_reverse.png";
import climateChangeLogo from "../images/climateChangeWhite.png";
import { useLocation } from "react-router-dom";
import "./styles/CustomHeader.css";

function CustomHeader() {
  const location = useLocation();

  return (
    <header
      className={
        // dont animate header unless on homepage
        location.pathname === "/" ? "top-bar-animation" : "top-bar-no-animation"
      }
    >
      <CustomNav />
      <img className="header-logo" alt="" src={climateChangeLogo}></img>
      <img className="header-logo" alt="" src={umaineLogo}></img>
    </header>
  );
}

export default CustomHeader;
