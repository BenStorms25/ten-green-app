import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useUsaGeo } from "./useUsaGeo";
import { Marks, dots } from "./Marks";
import { useData } from "./useData";
import { dataFilter } from "./dataFilter";
import { usePoints } from "./usePoints";
import * as d3 from "d3";
import { scaleOrdinal, hcl } from "d3";
import "../components/styles/Globe.css";

const width = 960;
const height = 500;
const colorScale = d3.scaleSequential(d3.interpolateYlGnBu).domain([10, 0]);

const App = () => {
  const data = useData();
  const point = usePoints();
  const UsaGeo = useUsaGeo();
  const [year, setYear] = useState(2000);

  if (!UsaGeo || !data || !point) {
    return <pre>Loading...</pre>;
  }

  const handleSliderChange = (event) => {
    setYear(event.target.value);
  };

  const play = () => {
    console.log(year);
    if (+year === 2021) {
      console.log(2021);
      return;
    }

    let y = year;
    const x = setInterval(() => {
      y++;
      setYear(y);
      console.log(y);
      if (y === 2021) {
        clearInterval(x);
      }
    }, 1000);
  };

  return (
    <div class="flex-container">
      <div class="slider-wrapper">
        <label for="year">Year {year}</label>
        <div>
          <input
            type="range"
            id="year"
            name="year"
            min="2000"
            max="2021"
            step="1"
            list="tickmarks"
            value={year}
            onChange={(e) => handleSliderChange(e)}
          />
          <datalist id="tickmarks">
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
        <input
          type="button"
          value="play"
          style={{ width: 50, marginTop: 10 }}
          onClick={play}
        />
      </div>

      <svg width={width} height={height}>
        <Marks
          UsaGeo={UsaGeo}
          data={data}
          year={year}
          colorScale={colorScale}
        />
        <points point={point} />
      </svg>
    </div>
  );
};

export default App;