import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/itsyaboichase/fe92d3ac76b98126fb3fc766e52f6414/raw/b7dcc81f8b690c24cd32e54bf31f718c4f0bd3cb/whole_usa_ozone_exsample_cleaned.csv';

const row = d => {
  d.latitude = +d.latitude;
  d.longitude = +d.longitude;
  return d;
};

export const usePoints = () => {
  const [point, setPoint] = useState(null);
  
  useEffect(() => {
    csv(csvUrl).then(setPoint)
  }, []);
    
  return point;
};