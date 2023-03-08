import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/SideDetails.css";

function SideDetails() {
  const year = useSelector((state => state.year));
  const current_id = useSelector((state => state.id))
  const county = useSelector((state) => state.county);
  const tenGreenScore = useSelector((state) => state.tenGreenScore);
  const aqi = useSelector((state) => state.aqi);
  const arsenic = useSelector((state) => state.arsenic);
  const cadmium = useSelector((state) => state.cadmium);
  const co = useSelector((state) => state.co);
  const lead = useSelector((state) => state.lead);
  const nickel = useSelector((state) => state.nickel);
  const no = useSelector((state) => state.no);
  const no2 = useSelector((state) => state.no2);
  const ozone = useSelector((state) => state.ozone);
  const pm10 = useSelector((state) => state.pm10);
  const pm25 = useSelector((state) => state.pm25);
  const so2 = useSelector((state) => state.so2);
  const dispatch = useDispatch();

  const measures = [
    "tenGreenScore",
    "aqi",
    "ozone",
    "so2",
    "no2",
    "no",
    "co",
    "pm25",
    "pm10",
    "arsenic",
    "lead",
    "cadmium",
  ];
  const [active, setActive] = useState(measures[0]);

  function adjust_graph(value) {
    setActive(value);
    if (value === "tenGreenScore") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "10green" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 10 });
    } else if (value === "aqi") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "aqi" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 60 });
    } else if (value === "arsenic") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "arsenic" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 0.0015 });
    } else if (value === "cadmium") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "cadmium" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 0.005 });
    } else if (value === "co") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "co" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 1.5 });
    } else if (value === "lead") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "lead" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 0.2 });
    } else if (value === "nickel") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "nickel" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 0.0148 });
    } else if (value === "no2") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "no2" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 60 });
    } else if (value === "ozone") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "ozone" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 0.1 });
    } else if (value === "pm10") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "pm10" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 50 });
    } else if (value === "pm25") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "pm25" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 15 });
    } else if (value === "so2") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "so2" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 40 });
    }
  }
  return (
    <div className="side-details">
      <h6>{county}</h6>
      <div className="side-detail-pollutant-10Green">
        <p className="pollutant-title">10Green Score</p>
        <button
          className="button"
          disabled={active === "tenGreenScore"}
          onClick={() => adjust_graph("tenGreenScore")}
        >
          {tenGreenScore}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">AQI</p>
        <button
          className="button"
          disabled={active === "aqi"}
          onClick={() => adjust_graph("aqi")}
        >
          {aqi}
        </button>
      </div>
      <hr></hr>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">Ozone</p>
        <button
          className="button"
          disabled={active === "ozone"}
          onClick={() => adjust_graph("ozone")}
        >
          {!isNaN(ozone) ? ozone.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">PM25</p>
        <button
          className="button"
          disabled={active === "pm25"}
          onClick={() => adjust_graph("pm25")}
        >
          {!isNaN(pm25) ? pm25.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">PM10</p>
        <button
          className="button"
          disabled={active === "pm10"}
          onClick={() => adjust_graph("pm10")}
        >
          {!isNaN(pm10) ? pm10.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">SO2</p>
        <button
          className="button"
          disabled={active === "so2"}
          onClick={() => adjust_graph("so2")}
        >
          {!isNaN(so2) ? so2.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">NO2</p>
        <button
          className="button"
          disabled={active === "no2"}
          onClick={() => adjust_graph("no2")}
        >
          {!isNaN(no2) ? no2.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">Nickel</p>
        <button
          className="button"
          disabled={active === "nickel"}
          onClick={() => adjust_graph("nickel")}
        >
          {!isNaN(nickel) ? nickel.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">Lead</p>
        <button
          className="button"
          disabled={active === "lead"}
          onClick={() => adjust_graph("lead")}
        >
          {!isNaN(lead) ? lead.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">CO</p>
        <button
          className="button"
          disabled={active === "co"}
          onClick={() => adjust_graph("co")}
        >
          {!isNaN(co) ? co.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">Cadmium</p>
        <button
          className="button"
          disabled={active === "cadmium"}
          onClick={() => adjust_graph("cadmium")}
        >
          {!isNaN(cadmium) ? cadmium.toFixed(3) : "N/A"}
        </button>
      </div>
      <div className="side-detail-pollutant">
        <p className="pollutant-title">Arsenic</p>
        <button
          className="button"
          disabled={active === "arsenic"}
          onClick={() => adjust_graph("arsenic")}
        >
          {!isNaN(arsenic) ? arsenic.toFixed(3) : "N/A"}
        </button>
      </div>
    </div>
  );
}

export default SideDetails;
