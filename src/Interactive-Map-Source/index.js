import React from 'react';
import ReactDOM from 'react-dom';
import { useUSAtlas } from './useUSAtlas';
import { useData } from './useData';
import { BubbleMap } from './BubbleMap';
import { DateHistogram } from './DateHistogram';

const width = 960;
const height = 500;

const App = () => {
  const USAtlas = useUSAtlas();
  const data = useData();

  if (!USAtlas || !data) { 
    return <pre>Loading...</pre>;
  }

return (
  <svg width={width} height={height}>
    <BubbleMap data={data} USAtlas={USAtlas} />
  </svg>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);