import React, { useEffect, useState } from "react";
import MapApp from "../Interactive-Map-Source";
import HomepageMap from "../Homepage-map";
import FilterMaps from "./FilterMaps";
import ToggleSites from "./ToggleSites";
import "./styles/InteractiveMap.css";
import useWindowSize from "./useWindowSize";
import SideDetails from "./SideDetails";
import { useSelector } from "react-redux";

function InteractiveMap() {
  // swap mounted back and forth until svg can be identified
  const [mounted, setMounted] = useState(true);

  const county = useSelector((state) => state.county);

  function styleMap() {
    let USMap = document.getElementById("homepage-map-svg");
    // wait until DOM is loaded
    if (!USMap) {
      return;
    }
    USMap.classList.add("USMap");
  }

  function shrinkMapWithContainer() {
    let svg = document.getElementById("interactive-map-svg");
    // wait until DOM is loaded
    if (!svg) {
      // swap mounted, triggering useEffect again
      setMounted(!mounted);
      return;
    }

    const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
      const { x, y, width, height } = el.getBBox();
      if (!acc.xMin || x < acc.xMin) acc.xMin = x;
      if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
      if (!acc.yMin || y < acc.yMin) acc.yMin = y;
      if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
      return acc;
    }, {});

    const viewbox = `${xMin} ${yMin} ${xMax - xMin} ${yMax - yMin}`;

    svg.setAttribute("viewBox", viewbox);
  }

  function zoomInOnState() {
    // should be loaded by this time since this func should be triggered by click
    let svg = document.getElementById("homepage-map-svg");
    // wait until DOM is loaded
    if (!svg) {
      return;
    }

    var transformMatrix = [1, 0, 0, 1, 0, 0];
    var viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
    var centerX = parseFloat(viewbox[2]) / 2;
    var centerY = parseFloat(viewbox[3]) / 2;
    var matrixGroup = svg.getElementById("matrix-group");

    function pan(dx, dy) {
      transformMatrix[4] += dx;
      transformMatrix[5] += dy;

      var newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
      matrixGroup.setAttributeNS(null, "transform", newMatrix);
    }

    function zoom(scale) {
      for (var i = 0; i < 4; i++) {
        transformMatrix[i] *= scale;
      }
      transformMatrix[4] += (1 - scale) * centerX;
      transformMatrix[5] += (1 - scale) * centerY;

      var newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
      matrixGroup.setAttributeNS(null, "transform", newMatrix);
    }
  }

  useEffect(() => {
    // every render get width
    shrinkMapWithContainer();
    styleMap();
  }, []);

  useEffect(() => {
    zoomInOnState();
  }, [county]);

  return (
    <div id="interactive-map">
      <h5 className="map-title">10Green Score by County - 1980 to 2021</h5>
      {county === "Select a County" ? (
        <p className="click-to-select-county">
          Click on map to select a county
        </p>
      ) : null}

      <div className="map-and-details">
        <HomepageMap />
        <SideDetails />
      </div>
    </div>
  );
}

export default InteractiveMap;
