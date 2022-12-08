import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const DataFilter = (data, year, id) => {
  const dispatch = useDispatch();

  // basic data point
  class DataPoint {
    constructor() {
      this.countyName = "";
      this.measure = "";
      this.dataValue = 0;
      this.year = 2000;
    }
  }

  // construct array of blank DataPoints
  let dataPoints = [];
  for (let i = 0; i < data.length; i++) {
    dataPoints.push(new DataPoint());
  }

  // populate DataPoints objs with data from data array
  for (let i = 0; i < data.length; i++) {
    console.log("the id is ::: ", id);
    // if the id is equal to selected ID, then populate the dataPoints array
    if (data[i].id === id) {
      dataPoints[i].countyName = data[i].countyName;
      if (data[i].measure === "10green") {
        dataPoints[i].measure = "10green";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "aqi") {
        dataPoints[i].measure = "aqi";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "arsenic") {
        dataPoints[i].measure = "arsenic";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "cadmium") {
        dataPoints[i].measure = "cadmium";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "co") {
        dataPoints[i].measure = "co";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "lead") {
        dataPoints[i].measure = "lead";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "nickel") {
        dataPoints[i].measure = "nickel";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "no") {
        dataPoints[i].measure = "no";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "no2") {
        dataPoints[i].measure = "no2";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "ozone") {
        dataPoints[i].measure = "ozone";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "pm10") {
        dataPoints[i].measure = "pm10";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "pm25") {
        dataPoints[i].measure = "pm25";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      } else if (data[i].measure === "so2") {
        dataPoints[i].measure = "so2";
        dataPoints[i].dataValue = data[i].data[year - 2000];
      }
    }
  }

  // dispatch data points to redux store
  dataPoints.forEach((point) => {
    switch (point.measure) {
      case "10green":
        dispatch({ type: "SET_TEN_GREEN_SCORE", payload: point.dataValue });
        break;
      case "aqi":
        dispatch({ type: "SET_AQI", payload: point.dataValue });
        break;
      case "arsenic":
        dispatch({ type: "SET_ARSENIC", payload: point.dataValue });
        break;
      case "cadmium":
        dispatch({ type: "SET_CADMIUM", payload: point.dataValue });
        break;
      case "co":
        dispatch({ type: "SET_CO", payload: point.dataValue });
        break;
      case "lead":
        dispatch({ type: "SET_LEAD", payload: point.dataValue });
        break;
      case "nickel":
        dispatch({ type: "SET_NICKEL", payload: point.dataValue });
        break;
      case "no":
        dispatch({ type: "SET_NO", payload: point.dataValue });
        break;
      case "no2":
        dispatch({ type: "SET_NO2", payload: point.dataValue });
        break;
      case "ozone":
        dispatch({ type: "SET_OZONE", payload: point.dataValue });
        break;
      case "pm10":
        dispatch({ type: "SET_PM10", payload: point.dataValue });
        break;
      case "pm25":
        dispatch({ type: "SET_PM25", payload: point.dataValue });
        break;
      case "so2":
        dispatch({ type: "SET_SO2", payload: point.dataValue });
        break;
      default:
        break;
    }
  });

  // for loop over each year
  for (let i = 0; i < parseInt(data[0].y2) - parseInt(data[0].y1); i++) {}

  return new Map(data.map((obj) => [obj.id, obj.data[year - 2000]]));
};
