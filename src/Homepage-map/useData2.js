import React, { useState, useEffect } from "react";
import { csv, json } from "d3";
import { useSelector } from "react-redux";

// const csvUrl =
//   "https://gist.githubusercontent.com/itsyaboichase/ccf5f349e0a6eaed79f07171592463ad/raw/5f26401065f343cdbe2f997189cde60f894e73f1/ozone_2000-2021";
// const jsonUrl =
//   "https://gist.githubusercontent.com/BenStorms25/b62644c7998767ce365134997ccf083e/raw/5b4eac490f1306c9a4ab8a48686fd8693074705e/gistfile1.txt";
const jsonUrl10green =
  "https://gist.githubusercontent.com/BenStorms25/0f2b99dfbdf45388b1bf1909b9d53a82/raw/7fa42c4d7fb1f139a5df89214f60f73549f62fab/allData.txt";

const jsonUrlozone = 
"https://gist.githubusercontent.com/Edaran123/d6217605265759c0db60f7ff9297d1da/raw/8ce88a2c38ac64a3dc2ce0c0a30c3a09bc03181e/ozoneupdated.txt";






export const useData2 = () => {
  const [data, setData] = useState(null);
  const current_measure = useSelector((state) => state.current_measure);
  useEffect(() => {
    let max = 0;
    let min = 40;

    // const row = (d) => {
    //   for (const property in d) {
    //     if (property === "id") continue;
    //     if (+d[property] > max) {
    //       max = +d[property];
    //     }
    //     if (+d[property] < min) {
    //       min = +d[property];
    //     }
    //   }
    //   console.log(d);
    //   return d;
    // };
   

    
      json(jsonUrlozone).then((res) => {
        setData(res);
        return data;
      })
    
    
  }, []);

  return data;
};
