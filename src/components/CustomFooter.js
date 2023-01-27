import React from "react";
import climateChangeImage from "../images/cci_logo_v8_sep2022.png";
import "./styles/CustomFooter.css";

function CustomFooter() {
  return (
    <footer>
      <div className="footer-content">
        <img src={climateChangeImage}></img>
        <p>
          <i>
            An initiative of the Climate Change Institute at the University of
            Maine.
          </i>
        </p>
      </div>
    </footer>
  );
}

export default CustomFooter;
