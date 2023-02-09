import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/SideDetails.css";

function SideDetails() {
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

  function adjust_graph(value) {
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
      dispatch({ type: "SET_GRAPH_MAX", payload: 0.01 });
    } else if (value === "no") {
      dispatch({ type: "SET_CURRENT_MEASURE", payload: "no" });
      dispatch({ type: "SET_GRAPH_MAX", payload: 30 });
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

      <label className="e-float-text e-label-top">10Green Score </label>
      {/* <input
        type="text"
        required={true}
        readOnly={true}
        value={tenGreenScore}
      /> */}
      <button onClick={() => adjust_graph("tenGreenScore")}>
        {tenGreenScore}
      </button>

      <label className="e-float-text e-label-top">AQI </label>
      {/* <input type="text" required={true} readOnly={true} value={aqi} /> */}
      <button onClick={() => adjust_graph("aqi")}>{aqi}</button>
      <label className="e-float-text e-label-top">Ozone </label>
      {/* <input type="text" required={true} readOnly={true} value={ozone} /> */}
      <button onClick={() => adjust_graph("ozone")}>{ozone}</button>
      <label className="e-float-text e-label-top">PM25 </label>
      {/* <input type="text" required={true} readOnly={true} value={pm25} /> */}
      <button onClick={() => adjust_graph("pm25")}>{pm25}</button>
      <label className="e-float-text e-label-top">PM10 </label>
      <button onClick={() => adjust_graph("pm10")}>{pm10}</button>
      {/* <input type="text" required={true} readOnly={true} value={pm10} /> */}
      <label className="e-float-text e-label-top">SO2 </label>
      <button onClick={() => adjust_graph("so2")}>{so2}</button>
      {/* <input type="text" required={true} readOnly={true} value={so2} /> */}
      <label className="e-float-text e-label-top">NO2 </label>
      <button onClick={() => adjust_graph("no2")}>{no2}</button>
      {/* <input type="text" required={true} readOnly={true} value={no2} /> */}
      <label className="e-float-text e-label-top">NO </label>
      <button onClick={() => adjust_graph("no")}>{no}</button>
      {/* <input type="text" required={true} readOnly={true} value={no} /> */}
      <label className="e-float-text e-label-top">Nickel </label>
      <button onClick={() => adjust_graph("nickel")}>{nickel}</button>
      {/* <input type="text" required={true} readOnly={true} value={nickel} /> */}
      <label className="e-float-text e-label-top">Lead </label>
      <button onClick={() => adjust_graph("lead")}>{lead}</button>
      {/* <input type="text" required={true} readOnly={true} value={lead} /> */}
      <label className="e-float-text e-label-top">CO </label>
      <button onClick={() => adjust_graph("co")}>{co}</button>
      {/* <input type="text" required={true} readOnly={true} value={co} /> */}
      <label className="e-float-text e-label-top">Cadmium </label>
      <button onClick={() => adjust_graph("cadmium")}>{cadmium}</button>
      {/* <input type="text" required={true} readOnly={true} value={cadmium} /> */}
      <label className="e-float-text e-label-top">Arsenic </label>
      <button onClick={() => adjust_graph("arsenic")}>{arsenic}</button>
      {/* <input type="text" required={true} readOnly={true} value={arsenic} /> */}
    </div>
  );
}

export default SideDetails;
