import React from "react";
import CustomNav from "./CustomNav";
import YourAQNow from "./YourAQNow";
import umaineLogo from "../images/UMaine_fullcrest_logo4c_reverse.png";
import climateChangeLogo from "../images/cci_logo_v8_sep2022.png";
import "./styles/CustomHeader.css";

function CustomHeader(props) {
  return (
    <header
      className={
        // dont animate header unless on homepage
        props.location.pathname === "/"
          ? "top-bar-animation"
          : "top-bar-no-animation"
      }
    >
      <img className="header-logo" src={umaineLogo}></img>
      <img className="header-logo" src={climateChangeLogo}></img>
      <CustomNav />
      <YourAQNow />
    </header>
  );
}

export default CustomHeader;
