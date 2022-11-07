import React from "react";
import CustomNav from "./CustomNav";
import YourAQNow from "./YourAQNow";
import umaineLogo from "../images/UMaine_fullcrest_logo4c_reverse.png";
import climateChangeLogo from "../images/cci_logo_v8_sep2022.png";
import "./CustomHeader.css";

function CustomHeader() {
  return (
    <header className="top-bar">
      <img className="header-logo" src={umaineLogo}></img>
      <img className="header-logo" src={climateChangeLogo}></img>
      <CustomNav />
      <YourAQNow />
    </header>
  );
}

export default CustomHeader;
