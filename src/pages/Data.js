import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import DataContent from "../components/DataContent";
import "./styles/Data.css";
import "../Interactive-Map-Source/styles.css";
import * as d3 from "d3";
import MapApp from "../Interactive-Map-Source";

function Data() {
  useEffect(() => {
    document.title = "Data - 10Green";
  }, []);

  return (
    <div className="data-page">
      <script src="https://d3js.org/d3.v7.min.js"></script>
      <CustomHeader />
      <MapApp />
    </div>
  );
}

export default Data;
