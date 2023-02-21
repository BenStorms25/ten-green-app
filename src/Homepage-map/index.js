import React, { useState, useEffect } from "react";
import { useUsaGeo } from "./useUsaGeo";
import MapLegend from "../components/Interactive_map_comps/MapLegend";
import { Marks } from "./Marks";
import { useData2 } from "./useData2";
import { usePoints } from "./usePoints";
import * as d3 from "d3";
import "../components/styles/Globe.css";
import "../components/styles/InteractiveMap.css";
import "./styles.css";
import { useSelector } from "react-redux";
import { Data_Formatter2 } from "../components/Data_Formatter_2";
import playbuttonpic from "../images/playbutton.png";
import pausebuttonpic from "../images/pause button.png";
import getStateMatrix from "./getStateMatrix";

let ispaused = false;
const App = () => {
  const current_measure = useSelector((state) => state.current_measure);

  const width = window.innerWidth / 2.3;
  const height = width / 1.7;
  let variableRange = 10;
  if (current_measure === "ozone") {
    variableRange = 0.1;
  }
  let colorScale = d3
    .scaleSequential(d3.interpolateRdYlGn)
    .domain([variableRange, 0]);
  if (current_measure !== "10green") {
    colorScale = d3
      .scaleSequential(d3.interpolateYlGnBu)
      .domain([variableRange, 0]);
  }
  // let data = useData();
  let data = Data_Formatter2(current_measure);

  const [mounted, setMounted] = useState(false);
  const [attatched, setAttatched] = useState(false);

  const [matrix, setMatrix] = useState(new DOMMatrix());

  //let data = useData();
  //let data2 = useData2();
  let data2 = useData2();
  let svgCanvas;
  let viewPort;
  var drag = false;
  var offset = { x: 0, y: 0 };
  var factor = 0.02;

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

  const point = usePoints();
  const UsaGeo = useUsaGeo();

  const [year, setYear] = useState(1980);

  if (!UsaGeo || !data || !point) {
    return <pre>Loading...</pre>;
  }

  const handleSliderChange = (event) => {
    setYear(event.target.value);
  };

  const play = () => {
    console.log(ispaused);

    ispaused = false;
    if (+year === 2021) {
      return;
    }

    let y = year;
    let x = setInterval(() => {
      // clearInterval(x);
      if (ispaused == true) {
        console.log("TEST");
        clearInterval(x);
      } else {
        y++;
        console.log(ispaused);
        setYear(y);

        if (y === 2021) {
          clearInterval(x);
        }
      }
    }, 1000);
  };

  const pause = () => {
    ispaused = true;
    console.log(ispaused);
  };

  const handleReset = () => {
    console.log("handle reset");
    resetMap();
  };

  const handleStateChange = () => {
    setMatrix(getStateMatrix("ME"));
  };

  function resetMap() {
    console.log("resetting map");
    setMatrix(new DOMMatrix([1, 0, 0, 1, -15, 31]));
    viewPort.style.transform = matrix.toString();
    // detatch and reattatch listeners
    //detatchListeners();
  }

  function beginDrag(event) {
    drag = true;
    offset = { x: event.offsetX, y: event.offsetY };
  }

  function transformViewPort(event) {
    if (drag) {
      var tx = event.offsetX - offset.x;
      var ty = event.offsetY - offset.y;
      console.log(tx, ty);
      offset = {
        x: event.offsetX,
        y: event.offsetY,
      };
      console.log("before matrix man: " + matrix);
      matrix.preMultiplySelf(new DOMMatrix().translateSelf(tx, ty));
      console.log("mousemove matrix: " + matrix);
      viewPort.style.transform = matrix.toString();
      // assign matrix to state
      setMatrix(matrix);
    }
  }

  function endDrag(event) {
    drag = false;
  }

  function zoom(event) {
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
    console.log("zoom matrix: " + matrix);
    viewPort.style.transform = matrix.toString();
    // assign matrix to state
    setMatrix(matrix);
  }

  function attatchListeners() {
    svgCanvas = document.getElementById("homepage-map-svg");
    viewPort = document.getElementById("matrix-group");
    console.log("adding listener");
    svgCanvas.addEventListener("pointerdown", beginDrag);
    svgCanvas.addEventListener("pointermove", transformViewPort);
    svgCanvas.addEventListener("pointerup", endDrag);
    svgCanvas.addEventListener("wheel", zoom);
  }

  return (
    <div class="flex-container">
      <div className="refresh-div">
        <button onClick={handleReset}>Reset Map</button>
        <button onClick={handleStateChange}>State Change</button>
      </div>
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

          <current_year>{year}</current_year>
        </div>

        <div className="playButton">
          <img
            src={playbuttonpic}
            width={"40px"}
            height={"40px"}
            onClick={play}
            id={"playButton"}
          ></img>
        </div>
        <div className="pauseButton">
          <img
            src={pausebuttonpic}
            width={"35px"}
            height={"35px"}
            onClick={pause}
            id={"pauseButton"}
          ></img>
        </div>
      </div>
      <svg
        width={width}
        height={height}
        id="homepage-map-svg"
        viewBox={`0 0 ${width * 1.3} ${height * 1.3}`}
        style={{ border: "1px solid grey" }}
      >
        <g id="matrix-group" transform="matrix(1 0 0 1 0 0)">
          {current_measure === "ozone" ? (
            <Marks
              UsaGeo={UsaGeo}
              data={data2}
              year={year}
              colorScale={colorScale}
            />
          ) : (
            <Marks
              UsaGeo={UsaGeo}
              data={data}
              year={year}
              colorScale={colorScale}
            />
          )}

          <points point={point} />
        </g>
      </svg>
    </div>
  );
};

export default App;
