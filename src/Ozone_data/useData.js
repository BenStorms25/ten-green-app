import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/itsyaboichase/ccf5f349e0a6eaed79f07171592463ad/raw/5f26401065f343cdbe2f997189cde60f894e73f1/ozone_2000-2021';

export const useData = () => {
	const [data, setData] = useState(null);
  
  useEffect(() => {
    let max = 0;
    let min = 20;
    
    const row = d => {
      for (const property in d) {
      	if (property === "id")
          continue;
        if (+d[property] > max) {
        	max = +d[property];
        }
        if (+d[property] < min) {
        	min = +d[property];
        }
      }
    	return d;
    }
  	csv(csvUrl, row).then((res) => {
      res.max = max;
      res.min = min;
      setData(res);
    });
  }, []);
  
  return data;
}