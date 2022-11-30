import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import FilterMaps from "./FilterMaps";
import MapApp from "../Interactive-Map-Source";
import OzoneMap from "../Ozone_data";
import * as d3 from "d3";

function DataContent() {
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

  const [currentMap, setCurrentMap] = useState("");

  return (
    <div className="data-container">
      <FilterMaps
        currentMap={currentMap}
        setCurrentMap={setCurrentMap}
        mapOptions={mapOptions}
      />
      {renderMap(currentMap)}
    </div>
  );
}

export default DataContent;
