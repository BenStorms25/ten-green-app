import React, { useEffect } from "react";
import "./styles/Globe.css";
import globeImage from "../images/10Green Concept 3 Globe-01.png";
import InteractiveMap from "./InteractiveMap";
import { ResponsiveContainer } from "recharts";

function Globe(props) {
  // scale globe and transition to map on scroll
  function scaleAndTransitionGlobe() {
    const globeDiv = document.querySelector("#globe");
    const globeImage = document.querySelector("#globe-image");
    // adjusted fade rate for different widths
    let fadeRate;
    if (window.innerWidth >= 1030) {
      fadeRate = 600;
    } else if (window.innerWidth < 1030 && window.innerWidth >= 780) {
      fadeRate = 350;
    } else if (window.innerWidth < 780 && window.innerWidth >= 680) {
      fadeRate = 280;
    } else if (window.innerWidth < 680) {
      fadeRate = 200;
    }

    window.addEventListener("scroll", function () {
      // 2000 worked well for the scaling
      let scaler = window.scrollY / 2000;
      let opacity = 1;
      if (window.scrollY < 700) {
        // 0 to 800 scrollY, scale globe
        globeDiv.setAttribute(
          "style",
          "transform: scale(" + (1 + scaler) + ");"
        );

        opacity = 1 - window.scrollY / fadeRate;
        globeImage.setAttribute("style", "opacity: " + opacity + ";");
      } else {
        // set globe div to overflow hidden
        globeDiv.setAttribute("style", "transform: scale(" + 1.35 + ");");
      }
    });
  }

  useEffect(() => {
    scaleAndTransitionGlobe();
  });

  const GraphWidget = React.lazy(() => import("./GraphWidget.js"));

  return (
    <>
      <div className="globe-div">
        <div id="globe">
          <img id="globe-image" src={globeImage} alt=""></img>
        </div>
      </div>
      <div className="interactive-map-container">
        <InteractiveMap />
      </div>
      <div className="graph">
        <div id="graph_wrapper">
          <React.Suspense
            fallback={<div id="placeholder_graph">Loading...</div>}
          >
            <GraphWidget
              data={props.dataPoints}
              max={props.current_graph_max}
            />
          </React.Suspense>
        </div>
      </div>
    </>
  );
}

export default Globe;
