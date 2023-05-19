//Component to store the column(s) of buttons to select different pollutants and to display the data of the currently-selected county.

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/SideDetails.css";
import { ThresholdFinder } from "./ThresholdFinder";
import { Title_Formatter } from "./Title_Formatter";

function SideDetails() {
  const year = useSelector((state) => state.year);
  const current_id = useSelector((state) => state.id);
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
      <div className="buttons">
        <button
          className="button"
          disabled={active === "tenGreenScore"}
          onClick={() => adjust_graph("tenGreenScore")}
        >
          {"10Green Score " + tenGreenScore}
        </button>

        <button
          className="button"
          disabled={active === "aqi"}
          onClick={() => adjust_graph("aqi")}
        >
          {"AQI Score " + (aqi !== null ? aqi : "N/A")}
        </button>

        {window.innerWidth > 1130 && <hr></hr>}

        {/* Each button is greyed out if the current score is not 10Green. If it is, then the buttons are red if it's a negative score, green if positive, and grey if there is no data*/}
        <button
          className="button"
          disabled={active === "ozone"}
          onClick={() => adjust_graph("ozone")}
          style={
            active === "tenGreenScore"
              ? ozone !== null
                ? ozone >= ThresholdFinder("ozone")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"Ozone " +
            (!isNaN(ozone) && ozone !== null
              ? ozone.toFixed(1) + " ppb"
              : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "pm25"}
          onClick={() => adjust_graph("pm25")}
          title="Large Particulates"
          style={
            active === "tenGreenScore"
              ? pm25 !== null
                ? pm25 >= ThresholdFinder("pm25")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"PM2.5 " +
            (!isNaN(pm25) && pm25 !== null
              ? pm25.toFixed(1) + "µg m" + "\u00B3"
              : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "pm10"}
          background-color="#C9E5AA"
          onClick={() => adjust_graph("pm10")}
          title="Small Particulates"
          style={
            active === "tenGreenScore"
              ? pm10 !== null
                ? pm10 >= ThresholdFinder("pm10")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"PM10 " +
            (!isNaN(pm10) && pm10 !== null
              ? pm10.toFixed(1) + "µg m" + "\u00B3"
              : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "so2"}
          onClick={() => adjust_graph("so2")}
          title="Sulfur Dioxide"
          style={
            active === "tenGreenScore"
              ? so2 !== null
                ? so2 >= ThresholdFinder("so2")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"SO2 " +
            (!isNaN(so2) && so2 !== null ? so2.toFixed(1) + " ppb" : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "no2"}
          onClick={() => adjust_graph("no2")}
          title="Nitrogen Dioxide"
          style={
            active === "tenGreenScore"
              ? no2 !== null
                ? no2 >= ThresholdFinder("no2")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"NO2 " +
            (!isNaN(no2) && no2 !== null ? no2.toFixed(1) + " ppb" : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "nickel"}
          onClick={() => adjust_graph("nickel")}
          title="Nickel"
          style={
            active === "tenGreenScore"
              ? nickel !== null
                ? nickel >= ThresholdFinder("nickel")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"Nickel " +
            (!isNaN(nickel) && nickel !== null
              ? nickel.toFixed(1) + "µg m" + "\u00B3"
              : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "lead"}
          onClick={() => adjust_graph("lead")}
          title="Lead"
          style={
            active === "tenGreenScore"
              ? lead !== null
                ? lead >= ThresholdFinder("lead")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"Lead " +
            (!isNaN(lead) && lead !== null
              ? lead.toFixed(1) + "µg m" + "\u00B3"
              : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "co"}
          onClick={() => adjust_graph("co")}
          Title="Carbon Monoxide"
          style={
            active === "tenGreenScore"
              ? co !== null
                ? co >= ThresholdFinder("co")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"CO " + (!isNaN(co) && co !== null ? co.toFixed(1) + "ppm" : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "cadmium"}
          onClick={() => adjust_graph("cadmium")}
          title="Cadmium"
          style={
            active === "tenGreenScore"
              ? cadmium !== null
                ? cadmium >= ThresholdFinder("cadmium")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"Cadmium " +
            (!isNaN(cadmium) && cadmium !== null
              ? cadmium.toFixed(1) + "µg m" + "\u00B3"
              : "N/A")}
        </button>

        <button
          className="button"
          disabled={active === "arsenic"}
          title="Arsenic"
          onClick={() => adjust_graph("arsenic")}
          style={
            active === "tenGreenScore"
              ? arsenic !== null
                ? arsenic >= ThresholdFinder("arsenic")
                  ? { backgroundColor: "#E2AAAA" }
                  : { backgroundColor: "#C9E5AA" }
                : { backgroundColor: "lightgrey" }
              : { backgroundColor: "#f5f5f5" }
          }
        >
          {"Arsenic " +
            (!isNaN(arsenic) && arsenic !== null
              ? arsenic.toFixed(1) + "µg m" + "\u00B3"
              : "N/A")}
        </button>
      </div>
    </div>
  );
}

export default SideDetails;
