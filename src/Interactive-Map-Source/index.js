import React from "react";
//import ReactDOM from 'react-dom';
import { useUSAtlas } from "./useUSAtlas.js";
import { useData } from "./useData.js";
import { BubbleMap } from "./BubbleMap.js";
import "../components/styles/Globe.css";
//import { DateHistogram } from './DateHistogram.js';

const width = 960;
const height = 500;

const MapApp = () => {
  const USAtlas = useUSAtlas();
  const data = useData();

  if (!USAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height} id="interactive-map-svg">
      <BubbleMap data={data} USAtlas={USAtlas} />
    </svg>
  );
};

export default MapApp;
//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
