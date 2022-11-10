import React, { useEffect } from "react";
import "./styles/DataContent.css";
import * as d3 from "d3";

function DataContent() {
  useEffect(() => {
    d3.selectAll("p").style("color", "blue");
  });
  return (
    <div>
      <div className="data-container">
        <h2 className="header">Data</h2>
        <div className="d3-graph">
          <p>Data page</p>
        </div>
        <div className="d3-graph">
          <p>Data page</p>
        </div>
        <div className="d3-graph">
          <p>Data page</p>
        </div>
      </div>
    </div>
  );
}

export default DataContent;
