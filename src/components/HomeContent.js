//Content displayed on the homepage
import React, { useEffect, useState } from "react";
import Globe from "./Globe.js";
import tenGreenLogo from "../images/10Green-Logo-Black-(1).png";
import infoIcon from "../images/info.png";
import "./styles/HomeContent.css";
import { useSelector } from "react-redux";
import axios from "axios";
import fileDownload from "js-file-download";

function HomeContent() {
  let [selectId, setSelectedId] = useState(null);
  let [currentmeasure, setcurrentmeasure] = useState(null);
  let incomingID = useSelector((state) => state.id);
  let incomingmeasure = useSelector((state) => state.current_measure);
  let [current_graph_max, setgraphmax] = useState(null);
  let incominggraphmax = useSelector((state) => state.graph_max);
  const [countyData, setCountyData] = useState([]);

  class DataPoint {
    constructor(year, value) {
      this.year = year;
      this.value = value;
    }
  }

  let dataPoints = [];

  // from the retrieved data, populate the dataPoints array with DataPoint objects
  function createDataPoints() {
    if (countyData !== [] && countyData[0]) {
      for (let i = 0; i < Object.keys(countyData).length; i++) {
        if (countyData[i].measure === currentmeasure) {
          for (let j = 0; j < countyData[0].data.length; j++) {
            dataPoints.push(new DataPoint(1980 + j, countyData[i].data[j]));
          }
        }
      }
    }
  }

  async function getPollutantValsForCounty() {
    // if it's still 'Select a County', don't perform get request
    if (!isNaN(incomingID) && incomingID) {
      axios
        .get(
          `json/json_data-by-county/${incomingID}.json`
        ) 
        .then((res) => {
          setCountyData({ ...res.data });
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  }

  function removeScrollDown() {
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
    setSelectedId(incomingID);
    getPollutantValsForCounty();
  }, [incomingID]);

  useEffect(() => {
    setcurrentmeasure(incomingmeasure);
  }, [incomingmeasure]);

  useEffect(() => {
    setgraphmax(incominggraphmax);
  }, [incominggraphmax]);

  useEffect(() => {
    removeScrollDown();
  }, []);

  createDataPoints();

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
      <Globe dataPoints={dataPoints} current_graph_max={current_graph_max} />
    </>
  );
}

export default HomeContent;
