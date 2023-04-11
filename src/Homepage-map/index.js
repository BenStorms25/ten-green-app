import React, { useState, useEffect } from "react";
import { useUsaGeo } from "./useUsaGeo";
import { Marks } from "./Marks";
import { usePoints } from "./usePoints";
import * as d3 from "d3";
import "../components/styles/Globe.css";
import "../components/styles/InteractiveMap.css";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import playbuttonpic from "../images/playbutton.png";
import pausebuttonpic from "../images/pause button.png";
import getStateMatrix from "./getStateMatrix";
import { ScaleFormatter } from "../components/ScaleFormatter";
import axios from "axios";

// this needs to be outside of the component, not sure why, but it does
let ispaused = true;

const App = () => {
  // url for initial map data
  let dataUrl = "http://204.197.4.170/10green/json/10green_1980-2021.json";

  // VALUES FROM REDUX

  const current_measure = useSelector((state) => state.current_measure);
  const county = useSelector((state) => state.county);
  const reduxYear = useSelector((state) => state.year);
  const id = useSelector((state) => state.id);

  // STATE VARIABLES

  const [currentCounty, setCurrentCounty] = useState(county);
  const [countyData, setCountyData] = useState([]);
  const [hasMoved, setHasMoved] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [year, setYear] = useState(reduxYear);
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [attatched, setAttatched] = useState(false);
  const [matrix, setMatrix] = useState(
    new DOMMatrix([0.85, 0, 0, 0.85, -28, 30])
  );

  // VARS FOR MAP

  const width = window.innerWidth / 2.07;
  const height = width / 1.6;
  let maximum = ScaleFormatter(current_measure);
  const point = usePoints();
  const UsaGeo = useUsaGeo();
  let colorScale = d3
    .scaleSequential(d3.interpolateRdYlGn)
    .domain([0, maximum]);
  if (current_measure !== "10green") {
    colorScale = d3.scaleSequential(d3.interpolateYlGnBu).domain([0, maximum]);
  }
  let svgCanvas;
  let viewPort;
  var drag = false;
  var offset = { x: 0, y: 0 };
  var factor = 0.02;

  const StateAbrevs = [
    "AL",
    "AK",
    "null",
    "AZ",
    "AR",
    "CA",
    "null",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "null",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "null",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "null",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const dispatch = useDispatch();

  const handleSliderChange = (event) => {
    setYear(event.target.value);
  };

  // upon play button press
  const play = () => {
    ispaused = false;
    let y = year;
    let x = setInterval(() => {
      if (ispaused == true) {
        clearInterval(x);
      } else {
        y++;
        setYear(y);

        if (y === 2022) {
          setYear(1980);
          y = "1980";
        }
      }
    }, 1000);
  };

  // upon pause button press
  const pause = () => {
    ispaused = true;
    // force rerender
    setIsPaused({ ...isPaused });
  };

  // reset button press
  const handleReset = () => {
    resetMap();
    setHasMoved(false);
  };

  function resetMap() {
    // set map to original matrix
    setMatrix(new DOMMatrix([0.85, 0, 0, 0.85, -28, 30]));
    viewPort.style.transform = matrix.toString();
  }

  // upon state click
  const handleStateChange = () => {
    if (county.split(",").length > 1) {
      let stateCode = county.split(",")[1].trim();
      setMatrix(getStateMatrix(stateCode));
      setHasMoved(true);
    }
  };

  // press down on map to drag
  function beginDrag(event) {
    drag = true;
    offset = { x: event.offsetX, y: event.offsetY };
  }

  // drag based on mouse
  function transformViewPort(event) {
    if (drag) {
      var tx = event.offsetX - offset.x;
      var ty = event.offsetY - offset.y;
      offset = {
        x: event.offsetX,
        y: event.offsetY,
      };
      matrix.preMultiplySelf(new DOMMatrix().translateSelf(tx, ty));
      viewPort.style.transform = matrix.toString();
      // assign matrix to state
      if (!hasMoved) {
        setMatrix({ ...matrix });
      } else {
        setMatrix(matrix);
      }
      setHasMoved(true);
    }
  }

  function endDrag(event) {
    drag = false;
  }

  // zoom in on map
  function zoom(event) {
    // Only zoom if the Ctrl key is pressed
    if (!event.ctrlKey) {
      return; // exit if Ctrl key is not pressed
    }

    event.preventDefault();
    var zoom = event.deltaY > 0 ? -1 : 1;
    var scale = 1 + factor * zoom;
    offset = {
      x: event.offsetX,
      y: event.offsetY,
    };
    matrix.preMultiplySelf(
      new DOMMatrix()
        .translateSelf(offset.x, offset.y)
        .scaleSelf(scale, scale)
        .translateSelf(-offset.x, -offset.y)
    );
    viewPort.style.transform = matrix.toString();
    // assign matrix to state
    if (!hasMoved) {
      setMatrix({ ...matrix });
    } else {
      setMatrix(matrix);
    }
    setHasMoved(true);
  }

  // attatch event listeners for map movement
  function attatchListeners() {
    svgCanvas = document.getElementById("homepage-map-svg");
    viewPort = document.getElementById("matrix-group");
    svgCanvas.addEventListener("pointerdown", beginDrag);
    svgCanvas.addEventListener("pointermove", transformViewPort);
    svgCanvas.addEventListener("pointerup", endDrag);
    svgCanvas.addEventListener("wheel", zoom);
  }

  async function getPollutantValsForCounty() {
    console.log("1.) getting pollutant values");
    if (!isNaN(id) && id) {
      //let countyData = await getCountyData(parseInt(id));
      axios
        .get(`http://204.197.4.170/10green/json/json_data-by-county/${id}.json`)
        .then((res) => {
          setCountyData({ ...res.data });
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  }

  function dispatchPollutantVals() {
    // console.log("dispatching pollutant values");
    if (!countyData.length && countyData.length !== 0) {
      console.log("dispatching pollutant values");
      for (let i = 0; i < Object.keys(countyData).length; i++) {
        switch (countyData[i].measure) {
          case "10green":
            dispatch({
              type: "SET_TEN_GREEN_SCORE",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "aqi":
            dispatch({
              type: "SET_AQI",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "arsenic":
            dispatch({
              type: "SET_ARSENIC",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "cadmium":
            dispatch({
              type: "SET_CADMIUM",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "co":
            dispatch({
              type: "SET_CO",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "lead":
            dispatch({
              type: "SET_LEAD",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "nickel":
            dispatch({
              type: "SET_NICKEL",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "no2":
            dispatch({
              type: "SET_NO2",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "ozone":
            dispatch({
              type: "SET_OZONE",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "pm10":
            dispatch({
              type: "SET_PM10",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "pm25":
            dispatch({
              type: "SET_PM25",
              payload: countyData[i].data[year - 1980],
            });
            break;
          case "so2":
            dispatch({
              type: "SET_SO2",
              payload: countyData[i].data[year - 1980],
            });
            break;
          default:
            break;
        }
      }
    }
  }
  // USEEFFECT HOOKS

  useEffect(() => {
    getPollutantValsForCounty();
  }, [county, year]);

  useEffect(() => {
    dispatchPollutantVals();
  }, [countyData]);

  useEffect(() => {
    dispatch({ type: "SET_TITLE_YEAR", payload: year });
  }, [year]);

  // initially, get data for 10green pollutant
  useEffect(() => {
    axios
      .get(
        `http://204.197.4.170/10green/json/${
          current_measure === "aqi" ? "aqi_median" : current_measure
        }_1980-2021.json`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  // make the axios call on pollutant change
  useEffect(() => {
    axios
      .get(
        `http://204.197.4.170/10green/json/${
          current_measure === "aqi" ? "aqi_median" : current_measure
        }_1980-2021.json`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, [current_measure]);

  // initially attatch event listeners
  useEffect(() => {
    svgCanvas = document.getElementById("homepage-map-svg");
    viewPort = document.getElementById("matrix-group");
    if (svgCanvas) {
      setMounted(true);
    }
    if (mounted && !attatched) {
      attatchListeners();
      setAttatched(true);
    }
  });

  // matrix change should reattatch listeners
  useEffect(() => {
    if (mounted) {
      // apply another transform so that map resets on first press
      viewPort.style.transform = matrix.toString();
      attatchListeners();
    }
  }, [matrix]);

  useEffect(() => {
    if (currentCounty === "Select a County" && county === "Penobscot, ME") {
    } else {
      handleStateChange();
    }
  }, [county]);

  // if vars cannot be found, return loading text
  if (!UsaGeo || !data || !point) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      <svg
        width={"100%"}
        height={height}
        id="homepage-map-svg"
        viewBox={`0 0 ${812} ${483}`}
        style={{ border: "1px solid grey" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="matrix-group" transform="matrix(0.85 0 0 0.85 -28 30)">
          <Marks
            UsaGeo={UsaGeo}
            data={data}
            year={year}
            colorScale={colorScale}
            maximum={maximum}
          />

          <points point={point} />
        </g>
        {hasMoved ? (
          <>
            <rect
              id="reset-map"
              x="740"
              y="440"
              width={65}
              height={23}
              rx="2"
              fill="#f2f2f2"
              onClick={handleReset}
            />
            <text
              className={"button"}
              onClick={handleReset}
              x="744"
              y="455"
              fill="black"
              font-size="11"
            >
              Reset View
            </text>
          </>
        ) : null}
      </svg>

      <div className="timeline">
        {ispaused ? (
          <div className="playButton">
            <img
              src={playbuttonpic}
              width={"35px"}
              height={"35px"}
              onClick={play}
              id={"playButton"}
              alt=""
            ></img>
          </div>
        ) : (
          <div className="pauseButton">
            <img
              src={pausebuttonpic}
              width={"30px"}
              height={"30px"}
              onClick={pause}
              id={"pauseButton"}
              alt=""
            ></img>
          </div>
        )}

        <div class="slider-wrapper">
          {/* <label for="year">Year {year}</label> */}

          <div>
            <input
              type="range"
              id="year"
              name="year"
              min="1980"
              max="2021"
              step="1"
              list="tickmarks"
              value={year}
              onChange={(e) => handleSliderChange(e)}
            />

            <datalist id="tickmarks">
              <option value="1980" label="1980"></option>
              <option value="1981" label="1981"></option>
              <option value="1982" label="1982"></option>
              <option value="1983" label="1983"></option>
              <option value="1984" label="1984"></option>
              <option value="1985" label="1985"></option>
              <option value="1986" label="1986"></option>
              <option value="1987" label="1987"></option>
              <option value="1988" label="1988"></option>
              <option value="1989" label="1989"></option>
              <option value="1990" label="1990"></option>
              <option value="1991" label="1991"></option>
              <option value="1992" label="1992"></option>
              <option value="1993" label="1993"></option>
              <option value="1994" label="1994"></option>
              <option value="1995" label="1995"></option>
              <option value="1996" label="1996"></option>
              <option value="1997" label="1997"></option>
              <option value="1998" label="1998"></option>
              <option value="1999" label="1999"></option>
              <option value="2000" label="2000"></option>
              <option value="2001" label="2001"></option>
              <option value="2002" label="2002"></option>
              <option value="2003" label="2003"></option>
              <option value="2004" label="2004"></option>
              <option value="2005" label="2005"></option>
              <option value="2006" label="2006"></option>
              <option value="2007" label="2007"></option>
              <option value="2008" label="2008"></option>
              <option value="2009" label="2009"></option>
              <option value="2010" label="2010"></option>
              <option value="2011" label="2011"></option>
              <option value="2012" label="2012"></option>
              <option value="2013" label="2013"></option>
              <option value="2014" label="2014"></option>
              <option value="2015" label="2015"></option>
              <option value="2016" label="2016"></option>
              <option value="2017" label="2017"></option>
              <option value="2018" label="2018"></option>
              <option value="2019" label="2019"></option>
              <option value="2020" label="2020"></option>
              <option value="2021" label="2021"></option>
            </datalist>
          </div>
        </div>
        <span className="current_year">{year}</span>
      </div>
    </>
  );
};

export default App;
