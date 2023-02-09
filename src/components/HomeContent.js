import React, { useEffect, useState } from "react";
import Globe from "./Globe.js";
import { GraphWidget } from "./GraphWidget.js";
import tenGreenLogo from "../images/10Green Logo Black (1).png";
import infoIcon from "../images/info.png";
import "./styles/HomeContent.css";
import { useData } from "../Homepage-map/useData";
import { DataFilter } from "../Homepage-map/DataFilter.js";
import { useSelector } from "react-redux";

function HomeContent() {
  let [selectId, setSelectedId] = useState(null);
  let [currentmeasure, setcurrentmeasure] = useState(null);
  let incomingID = useSelector((state) => state.id);
  let incomingmeasure = useSelector((state) => state.current_measure);
  let [current_graph_max, setgraphmax] = useState(null);
  let incominggraphmax = useSelector((state) => state.graph_max);

  useEffect(() => {
    setSelectedId(incomingID);
  }, [incomingID]);
  useEffect(() => {
    setcurrentmeasure(incomingmeasure);
  }, [incomingmeasure]);
  useEffect(() => {
    setgraphmax(incominggraphmax);
  }, [incominggraphmax]);

  // let selectId = "51041";
  class DataPoint {
    constructor() {
      this.year = 1980;
      this.value = 0;
    }
  }

  const data = useData();

  let dataPoints = [];
  for (let j = 0; j < 42; j++) {
    dataPoints.push(new DataPoint());
  }

  // if (data){
  // for (let i = 0; i < data.length; i++){
  //   if (data[i].id === selectId) {
  //     if (data[i].measure === currentmeasure) {

  //       for (let year = 1980; year < 2022; year++){
  //         if (data[i].data[year - 1980] !== null) {

  //           dataPoints[year - 1980].value = {x: data[i].data[year - 1980]};
  //           // dataPoints[year - 1980].value = data[i].data[year - 1980];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === selectId) {
        if (data[i].measure === currentmeasure) {
          for (let year = 1980; year < 2022; year++) {
            if (data[i].data[year - 1980] !== null) {
              dataPoints[year - 1980].value = { x: data[i].data[year - 1980] };
              // dataPoints[year - 1980].value = data[i].data[year - 1980];

              dataPoints[year - 1980].year = year;
            } else {
              dataPoints[year - 1980].value = "N/A";
              dataPoints[year - 1980].year = year;
            }
          }
        }
      }
    }
  }

  function removeScrollDown() {
    // remove scroll down arrow when user starts to scroll
    let downArrow = document.querySelector("#down-arrow");
    let scrollDown = document.querySelector("#scroll-down");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        downArrow.setAttribute("style", "display: none;");
        scrollDown.setAttribute("style", "display: none;");
      }
    });
  }

  useEffect(() => {
    removeScrollDown();
  }, []);

  return (
    <>
      <div className="center-div">
        <img src={tenGreenLogo} className="ten-green-logo" alt=""></img>
        <div class="down-arrow" id="down-arrow">
          <p className="scroll-down" id="scroll-down">
            Scroll Down!
          </p>
        </div>
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
      <GraphWidget data={dataPoints} max={current_graph_max} />
    </>
  );
}

export default HomeContent;
