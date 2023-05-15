import React from "react";
import HomepageMap from "./Interactive_map_comps/Homepage-map";
import "./styles/InteractiveMap.css";
import SideDetails from "./SideDetails";
import DataContent from "./DataContent";
import JustTitle from "./JustTitle";
import MapLegend from "./Interactive_map_comps/MapLegend";

function InteractiveMap() {
  return (
    <div id="interactive-map">
      <div className="map-top">
        <h5 className="map-title">
          <JustTitle></JustTitle>
        </h5>
        <DataContent />
      </div>
      <div className="map-bottom">
        <div className="bottom-left">
          <MapLegend />
          <HomepageMap />
        </div>
        <div className="bottom-right">
          <SideDetails />
        </div>
      </div>
    </div>
  );
}

export default InteractiveMap;
