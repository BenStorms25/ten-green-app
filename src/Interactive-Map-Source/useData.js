import { useState, useEffect } from 'react';
import {csv} from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/itsyaboichase/fe92d3ac76b98126fb3fc766e52f6414/raw/b7dcc81f8b690c24cd32e54bf31f718c4f0bd3cb/whole_usa_ozone_exsample_cleaned.csv';

const row = d => {
  d.latitude = +d.latitude;
  d.longitude = +d.longitude;
  d.AQI = +d.AQI;
  d.dateCollected = new Date(d.dateCollected);
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    csv(csvUrl).then(setData)
  }, []);
    
  return data;
};