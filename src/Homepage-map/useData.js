import React, { useState, useEffect } from "react";
import { csv, json } from "d3";

// const csvUrl =
//   "https://gist.githubusercontent.com/itsyaboichase/ccf5f349e0a6eaed79f07171592463ad/raw/5f26401065f343cdbe2f997189cde60f894e73f1/ozone_2000-2021";
const jsonUrl =
  "https://gist.githubusercontent.com/BenStorms25/b62644c7998767ce365134997ccf083e/raw/5b4eac490f1306c9a4ab8a48686fd8693074705e/gistfile1.txt";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let max = 0;
    let min = 20;

    const row = (d) => {
      for (const property in d) {
        if (property === "id") continue;
        if (+d[property] > max) {
          max = +d[property];
        }
        if (+d[property] < min) {
          min = +d[property];
        }
      }
      return d;
    };
    json(jsonUrl).then((res) => {
      setData(res);
    });
  }, []);

  return data;
};
