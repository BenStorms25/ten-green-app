import React, { useEffect, useState } from "react";
import HomepageMap from "../Homepage-map";
import FilterMaps from "./FilterMaps";
import ToggleSites from "./ToggleSites";
import "./styles/InteractiveMap.css";
import useWindowSize from "./useWindowSize";
import SideDetails from "./SideDetails";
import { useSelector } from "react-redux";
import DataContent from "./DataContent";
import { ZoomAndPan } from "./Interactive_map_comps/ZoomAndPan";
import MapLegend from "./Interactive_map_comps/MapLegend";
import ResetMap from "./Interactive_map_comps/ResetMap";

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

  useEffect(() => {
    // responsive design
    shrinkMapWithContainer();
    styleMap();
    //zoomInOnState();
  }, []);

  useEffect(() => {
    // when user clicks on new county, zoom in on stateOnState();
  }, [county]);

  return (
    <div id="interactive-map">
      <h5 className="map-title">10Green Score by County - 1980 to 2021</h5>
      {county === "Select a County" ? (
        <p className="click-to-select-county">
          Click on map to select a county
        </p>
      ) : (
        <p className="click-to-select-county">&nbsp;&nbsp;&nbsp;&nbsp;</p>
      )}

      <div className="map-and-details">
        <HomepageMap />
        <SideDetails />
        <ResetMap />
        <div className="search-bar">
          <DataContent />
        </div>
      </div>
    </div>
  );
}

export default InteractiveMap;
