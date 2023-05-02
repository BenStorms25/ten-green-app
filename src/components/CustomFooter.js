import React from "react";
import climateChangeImage from "../images/cci_logo_v8_sep2022.png";
import tenGreenLogoBlack from "../images/10Greenblacklogo.png";
import umaineLogo from "../images/UMaine_fullcrest_logo4c.png";
import "./styles/CustomFooter.css";

function CustomFooter() {
  return (
    <footer style={{ zIndex: 99 }}>
      <div className="content">
        <div className="top">
          <div className="box1">
            <img src={tenGreenLogoBlack}></img>
            <p>
              <strong>Tel:</strong> 207.581.2190
              <br></br>
              <strong>Fax:</strong> 207.581.1203
              <br></br>
              <a href="mailto:contactcci@maine.edu">
                <strong>contactcci@maine.edu</strong>
              </a>
            </p>
          </div>
          <div className="box2">
            <p>Navigation</p>
            <a href="#/#interactive-map">Score Map</a>
            <a href="#/about">About</a>
            <a href="#/pollutants-and-standards">Pollutants/Standards</a>
            <a href="#/aq-forecast">AQ Forecast</a>
          </div>
          <div className="box3">
            <p>External Links</p>
            <a href="https://climatereanalyzer.org/">Climate Reanalyzer</a>
            <a href="https://climatechange.umaine.edu/about/">
              University of Maine C.C.I.
            </a>
            <a href="https://climatechange.umaine.edu/climate-matters/ice-core-perspectives/">
              CCI Ice Core Research
            </a>
            <a href="https://climatechange.umaine.edu/climate-matters/10green/">
              10Green
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="bottom">
          <p>© 2023 10Green.</p>
          <div className="images">
            <img src={umaineLogo}></img>
            <img src={climateChangeImage}></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
