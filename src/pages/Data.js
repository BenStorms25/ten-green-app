import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import DataContent from "../components/DataContent";
import "./styles/Data.css";
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
      <DataContent />
      <p>Below is an example d3 program.</p>
      <MapApp/>
    </div>
  );
}

export default Data;
