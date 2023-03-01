import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const DataFilter3 = (data, data2, year, id) => {
//   const StateAbrevs = [
//     "AL",
//     "AK",
//     "null",
//     "AZ",
//     "AR",
//     "CA",
//     "null",
//     "CO",
//     "CT",
//     "DE",
//     "DC",
//     "FL",
//     "GA",
//     "null",
//     "HI",
//     "ID",
//     "IL",
//     "IN",
//     "IA",
//     "KS",
//     "KY",
//     "LA",
//     "ME",
//     "MD",
//     "MA",
//     "MI",
//     "MN",
//     "MS",
//     "MO",
//     "MT",
//     "NE",
//     "NV",
//     "NH",
//     "NJ",
//     "NM",
//     "NY",
//     "NC",
//     "ND",
//     "OH",
//     "OK",
//     "OR",
//     "PA",
//     "null",
//     "RI",
//     "SC",
//     "SD",
//     "TN",
//     "TX",
//     "UT",
//     "VT",
//     "VA",
//     "null",
//     "WA",
//     "WV",
//     "WI",
//     "WY",
//   ];

//   const dispatch = useDispatch();

//   // basic data point
//   class DataPoint {
//     constructor() {
//       this.county = "";
//       this.id = "";
//       this.measure = "";
//       this.dataValue = "";
//       this.year = 1980;
//       this.warning = "N/A";
//     }
//   }

//   // construct array of blank DataPoints
//   let dataPoints = [];
//   for (let i = 0; i < data.length; i++) {
//     dataPoints.push(new DataPoint());
//   }

//   // populate DataPoints objs with data from data array
//   for (let i = 0; i < data.length; i++) {
//     // if the id is equal to selected ID, then populate the dataPoints array
//     if (data[i].id === id) {
//       dataPoints[i].id = data[i].id;
//       dataPoints[i].county = data[i].county;
//       if (data[i].measure === "10green") {
//         dataPoints[i].measure = "10green";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "aqi") {
//         dataPoints[i].measure = "aqi";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "arsenic") {
//         dataPoints[i].measure = "arsenic";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "cadmium") {
//         dataPoints[i].measure = "cadmium";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "co") {
//         dataPoints[i].measure = "co";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
          
//         }
//       } else if (data[i].measure === "lead") {
//         dataPoints[i].measure = "lead";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "nickel") {
//         dataPoints[i].measure = "nickel";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "no") {
//         dataPoints[i].measure = "no";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "no2") {
//         dataPoints[i].measure = "no2";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "ozone") {
//         dataPoints[i].measure = "ozone";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "pm10") {
//         dataPoints[i].measure = "pm10";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "pm25") {
//         dataPoints[i].measure = "pm25";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       } else if (data[i].measure === "so2") {
//         dataPoints[i].measure = "so2";
//         if (data[i].data[year - 1980] !== null) {
//           dataPoints[i].dataValue = data[i].data[year - 1980];
//         } else {
//           dataPoints[i].dataValue = "N/A";
//         }
//       }
//     }
//   }

//   // dispatch data points to redux store
//   dataPoints.forEach((point) => {
//     const Capitalized = point.county.slice(0, -7);
//     const StateIndex = parseInt(point.id.slice(0, 2));
//     const ActualState = StateAbrevs[StateIndex - 1];
//     const finalName = Capitalized + ", " + ActualState;

//     switch (point.measure) {
//       case "10green":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_TEN_GREEN_SCORE", payload: point.dataValue });
//         break;
//       case "aqi":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_AQI", payload: point.dataValue });
//         break;
//       case "arsenic":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_ARSENIC", payload: point.dataValue });
//         break;
//       case "cadmium":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_CADMIUM", payload: point.dataValue });
//         break;
//       case "co":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_CO", payload: point.dataValue });
//         break;
//       case "lead":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_LEAD", payload: point.dataValue });
//         break;
//       case "nickel":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_NICKEL", payload: point.dataValue });
//         break;
//       case "no":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_NO", payload: point.dataValue });
//         break;
//       case "no2":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_NO2", payload: point.dataValue });
//         break;
//       case "ozone":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_OZONE", payload: point.dataValue });
//         break;
//       case "pm10":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_PM10", payload: point.dataValue });
//         break;
//       case "pm25":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_PM25", payload: point.dataValue });
//         break;
//       case "so2":
//         dispatch({ type: "SET_COUNTY_NAME", payload: finalName });
//         dispatch({ type: "SET_SO2", payload: point.dataValue });
//         break;
//       default:
//         break;
//     }
//   });

  // return data that will be mapped to the map
  return new Map(data2.map((obj) => [obj.id, obj.data2[year - 1980]]));
};
