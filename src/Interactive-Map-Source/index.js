import React from "react";
//import ReactDOM from 'react-dom';
import { useUSAtlas } from "./useUSAtlas.js";
import { useData } from "./useData.js";
import { BubbleMap } from "./BubbleMap.js";
import "../components/styles/Globe.css";
//import { DateHistogram } from './DateHistogram.js';

const width = window.innerWidth / 2;
const height = width / 1.92;

const MapApp = () => {
  const USAtlas = useUSAtlas();
  const data = useData();

  if (!USAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width * 1.2} ${height * 1.2}`}
      id="interactive-map-svg"
    >
      <BubbleMap data={data} USAtlas={USAtlas} />
    </svg>
  );
};

export default MapApp;
//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
