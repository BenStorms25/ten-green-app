import React from "react";
import "./styles/MapLegend.css";

function MapLegend() {
  return (
    <div className="map-legend">
      <div className="score-card">
        <div
          className="score-stripe"
          style={{ "background-color": "rgb(165, 0, 38)" }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <p className="score-number">1</p>
      </div>
      <div className="score-card">
        <div className="score-stripe" style={{ "background-color": "blue" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <p className="score-number">2</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">3</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">4</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">5</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">6</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">7</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">8</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">9</p>
      </div>
      <div className="score-card">
        <div className="score-stripe">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <p className="score-number">10</p>
      </div>
    </div>
  );
}

export default MapLegend;
