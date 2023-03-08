import React from "react";
import { useSelector } from "react-redux";
import "./styles/MapLegend.css";

function MapLegend() {
  const currentPollutant = useSelector((state) => state.current_measure);
  return (
    <>
      {currentPollutant === "10green" ? (
        <div className="map-legend">
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(102, 0, 51)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">0</p>
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
              style={{ "background-color": "rgb(241, 110, 67)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">3</p>
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
              style={{ "background-color": "rgb(254, 221, 141)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">5</p>
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
              style={{ "background-color": "rgb(215, 238, 142)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">7</p>
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
              style={{ "background-color": "rgb(34, 150, 79)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">9</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(0, 104, 55)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">10</p>
          </div>
        </div>
      ) : (
        <div className="map-legend">
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(255, 255, 217)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">Low</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(239, 249, 188)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(211, 238, 179)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(166, 220, 183)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(111, 199, 189)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(66, 177, 194)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>

          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(38, 147, 190)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(33, 109, 175)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(35, 73, 157)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(26, 45, 126)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">&nbsp;</p>
          </div>
          <div className="score-card">
            <div
              className="score-stripe"
              style={{ "background-color": "rgb(8, 29, 88)" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <p className="score-number">High</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MapLegend;
