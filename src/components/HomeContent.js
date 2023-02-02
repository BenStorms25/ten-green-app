import React, { useEffect, useState } from "react";
import Globe from "./Globe.js";
import {GraphWidget} from"./GraphWidget.js"
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import infoIcon from "../images/info.png";
import "./styles/HomeContent.css";
import { useData } from "../Homepage-map/useData";
import { DataFilter } from "../Homepage-map/DataFilter.js";
import { useSelector } from "react-redux";



function HomeContent() {

  let [selectId, setSelectedId] = useState(null);
  
  let incomingID = useSelector((state) => state.id);
  
  useEffect(() => {
    setSelectedId(incomingID);
  }, [incomingID]);
  // let selectId = "51041";
  class DataPoint {
    constructor() {
      this.year = 1980;
      this.value = 0;
    }
  }
  
  const data = useData();
  
  let dataPoints=[];
  for (let j = 0; j < 42; j++) {
    dataPoints.push(new DataPoint());
  }
  
  
if (data){
for (let i = 0; i < data.length; i++){
  if (data[i].id === selectId) {
    if (data[i].measure === "10green") {
      
      for (let year = 1980; year < 2022; year++){
        if (data[i].data[year - 1980] !== null) {
          console.log("Not Null");
          dataPoints[year - 1980].value = {x: data[i].data[year - 1980]};
          // dataPoints[year - 1980].value = data[i].data[year - 1980];

          dataPoints[year - 1980].year = year;
        } else {
          console.log("Null");
          dataPoints[year - 1980].value = "N/A";
          dataPoints[year - 1980].year = year;
        }
        
      }
  }
}}}

// for (let i = 0; i < 42; i++) {
//   let d = {
//     year: 1980 + i,
//     value: { x: Math.random() * (10 ) }
//   };

//   data.push(d);
// }
  return (
    <>
      <div className="center-div">
        <img src={tenGreenLogo} className="ten-green-logo" alt=""></img>
        <div className="info-div">
          <img src={infoIcon} alt="" className="info-icon"></img>
          <p className="hidden-info">
            The 10Green Score indicates the health of your environment using a
            number from 0 to 10. The higher the score, the healthier your
            environment.
            <br></br>
            <br></br>
            Factors that can reduce your score include unhealthy air quality
            readings and poor environmental monitoring.
          </p>
        </div>
      </div>
      <Globe />
      <GraphWidget
      data={dataPoints}/>
    </>
  );
}

export default HomeContent;
