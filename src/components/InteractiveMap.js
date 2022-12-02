import React, { useEffect, useState } from "react";
import MapApp from "../Interactive-Map-Source";
import OzoneMap from "../Ozone_data";
import FilterMaps from "./FilterMaps";
import "./styles/InteractiveMap.css";

function InteractiveMap() {
  const [currentMap, setCurrentMap] = useState("");
  // swap mounted back and forth until svg can be identified
  const [mounted, setMounted] = useState(true);

  function styleMap() {
    let USMap = document.getElementById("interactive-map-svg");
    // wait until DOM is loaded
    if (!USMap) {
      return;
    }
    USMap.classList.add("USMap");
  }

  function shrinkMapWithContainer() {
    let svg = document.getElementById("interactive-map-svg");
    console.log("svg: " + svg);
    // wait until DOM is loaded
    if (!svg) {
      // swap mounted, triggering useEffect again
      setMounted(!mounted);
      return;
    }

    console.log(svg);
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
  // use svg format
  //useSvgFormat();

  useEffect(() => {
    // every render get width
    shrinkMapWithContainer();
    styleMap();
  }, [mounted]);

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
      return <MapApp />;
    } else if (currentMap === "ozone") {
      return <OzoneMap />;
    } else if (currentMap === "nitrogen") {
      return <p></p>;
    } else if (currentMap === "co2") {
      return <p></p>;
    }
  }
  return (
    <div id="interactive-map">
      <FilterMaps
        currentMap={currentMap}
        setCurrentMap={setCurrentMap}
        mapOptions={mapOptions}
      />
      {renderMap(currentMap)}
    </div>
  );
}

export default InteractiveMap;
