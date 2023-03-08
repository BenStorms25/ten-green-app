import React from "react";
import HomepageMap from "../Homepage-map";
import "./styles/InteractiveMap.css";
import SideDetails from "./SideDetails";
import { useSelector } from "react-redux";
import DataContent from "./DataContent";

import { Title_Formatter } from "./Title_Formatter";
import MapLegend from "./Interactive_map_comps/MapLegend";

function InteractiveMap(props) {
  const GraphWidget = React.lazy(() => import("./GraphWidget.js"));
  const county = useSelector((state) => state.county);
  const current_measure = useSelector((state) => state.current_measure);
  const current_year = useSelector((state) => state.year);

  return (
    <div id="interactive-map">
      <div className="map-top">
        <h5 className="map-title">
          {Title_Formatter(current_measure)} Score by County - {current_year}{" "}
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
      <React.Suspense fallback={<div>Loading...</div>}>
        <GraphWidget data={props.dataPoints} max={props.current_graph_max} />
      </React.Suspense>
    </div>
    
  );
}

export default InteractiveMap;
