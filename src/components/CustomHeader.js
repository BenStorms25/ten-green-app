import React from "react";
import CustomNav from "./CustomNav";
import YourAQNow from "./YourAQNow";
import umaineLogo from "../images/q9fQVW4wTNbL9BEfAw2vR0CFd6UuF83DLKe6w162xj7Krc90zP4BIR31nlQvbwkP-UMaine_fullcrest_logo4c.png";
import "./CustomHeader.css";

function CustomHeader() {
  return (
    <header className="top-bar">
      <img className="umaine-logo" src={umaineLogo}></img>
      <CustomNav />
      <YourAQNow />
    </header>
  );
}

export default CustomHeader;
