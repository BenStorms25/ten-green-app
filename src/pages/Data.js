import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import * as d3 from "d3";
import MapApp from "../Interactive-Map-Source";

function Data() {
  useEffect(() => {
    document.title = "Data - 10Green";
    d3.selectAll("p").style("color", "blue");
  }, []);

  return (
    <div>
      <script src="https://d3js.org/d3.v7.min.js"></script>
      <CustomHeader />
      <p>Below is an example d3 program.</p>
      <MapApp/>
    </div>
  );
}

export default Data;
