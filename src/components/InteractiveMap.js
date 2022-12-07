import React, { useEffect, useState } from "react";
import MapApp from "../Interactive-Map-Source";
import HomepageMap from "../Homepage-map";
import FilterMaps from "./FilterMaps";
import ToggleSites from "./ToggleSites";
import "./styles/InteractiveMap.css";
import useWindowSize from "./useWindowSize";
import SideDetails from "./SideDetails";

function InteractiveMap() {
  const [currentMap, setCurrentMap] = useState("");
  // swap mounted back and forth until svg can be identified
  const [mounted, setMounted] = useState(true);
  const [viewSites, setViewSites] = useState(true);

  let windowSize = useWindowSize();

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
    // every render get width
    shrinkMapWithContainer();
    styleMap();
  }, [mounted, windowSize.width]);

  // options to filter by pollutant
  const mapOptions = [
    { value: "", text: "Default" },
    { value: "ozone", text: "Ozone" },
    { value: "nitrogen", text: "Nitrogen" },
    { value: "co2", text: "CO2" },
  ];

  function renderMap(currentMap) {
    // alternate between maps based on selection
    if (currentMap === "") {
      //return <MapApp viewSites={viewSites} />;
      return <HomepageMap />;
    } else if (currentMap === "ozone") {
      return <MapApp />;
    } else if (currentMap === "nitrogen") {
      return <p></p>;
    } else if (currentMap === "co2") {
      return <p></p>;
    }
  }
  return (
    <div id="interactive-map">
      <div className="map-and-details">
        <HomepageMap />
        <SideDetails />
      </div>
    </div>
  );
}

export default InteractiveMap;
