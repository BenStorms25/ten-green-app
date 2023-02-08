import React from "react";
import "./styles/MapLegend.css";

function MapLegend() {
  return (
    <>
      <p className="legend-label">
        <i>10Green Score to Color</i>
      </p>
      <div className="map-legend">
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(0, 104, 55)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">10</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(34, 150, 79)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">9</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(164, 216, 110)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">8</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(215, 238, 142)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">7</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(249, 247, 174)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">6</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(254, 221, 141)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">5</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(252, 172, 99)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">4</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(241, 110, 67)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">3</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(212, 50, 44)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">2</p>
        </div>
        <div className="score-card">
          <div
            className="score-stripe"
            style={{ "background-color": "rgb(165, 0, 38)" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <p className="score-number">1</p>
        </div>
      </div>
    </>
  );
}

export default MapLegend;
