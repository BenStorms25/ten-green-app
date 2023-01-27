import React, { useState, useEffect } from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';
import { useSelector } from "react-redux";
import { useData } from "../Homepage-map/useData";
import { DataFilter } from "../Homepage-map/DataFilter";
import { Marks, dots } from "../Homepage-map/Marks";
import "./styles/GraphWidget.css";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const jsonUrl = "https://gist.githubusercontent.com/BenStorms25/0f2b99dfbdf45388b1bf1909b9d53a82/raw/7fa42c4d7fb1f139a5df89214f60f73549f62fab/allData.txt";



export const GraphWidget =  ({data}) => {
    // let currentID = useSelector((state) => state.id);
    // let dataMap = DataFilter(data, year, currentID);
    return (
        <div id = "graphwidget">
<div style={styles}>
    <LineChart
      width={800}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value.x" stroke="#bde59c" dot={false} />
      <XAxis dataKey="year" type={'category'} interval={4} minTickGap= {5} tickLine={true} domain={['dataMin', 'dataMax']} />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
  </div>
    );
};

