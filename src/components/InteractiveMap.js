import React from "react";
import HomepageMap from "../Homepage-map";
import "./styles/InteractiveMap.css";
import SideDetails from "./SideDetails";
import { useSelector } from "react-redux";
import DataContent from "./DataContent";

import { Title_Formatter } from "./Title_Formatter";

function InteractiveMap() {
  const county = useSelector((state) => state.county);
  const current_measure = useSelector((state) => state.current_measure);

  return (
    <div id="interactive-map">
      <h5 className="map-title">
        {Title_Formatter(current_measure)} Score by County - 1980 to 2021
      </h5>
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

        <div className="search-bar">
          <DataContent />
        </div>
      </div>
    </div>
  );
}

export default InteractiveMap;
