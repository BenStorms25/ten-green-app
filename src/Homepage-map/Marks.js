import { geoIdentity, geoPath } from "d3";
import { DataFilter } from "./DataFilter";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allData from "../content/json_choropleth/allData.json";
import stateNameToAbbreviation from "../components/Abbrevinator"

const projection = geoIdentity().reflectY(false);
const path = geoPath(projection);

export const Marks = ({ UsaGeo, data, year, colorScale }) => {
  let [selectId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  let incomingID = useSelector((state) => state.id);

  let dataMap = DataFilter(allData, data, year, selectId); 
  const states = new Map(
    UsaGeo[1].features.map((d) => [d.id, d.properties.name])
  );

  useEffect(() => {
    setSelectedId(incomingID);
  }, [incomingID]);


  projection.fitExtent(
    [
      [0, 0],
      [975, 500],
    ],
    UsaGeo[0]
  );

  return (
    <g className="marks">
      {UsaGeo[0].features.map((feature) => {
        return (
          <path
            className="border"
            d={path(feature)}
            onClick={() => dispatch({ type: "SET_ID", payload: feature.id })}
            fill={
              colorScale(dataMap.get(feature.id))
                ? colorScale(dataMap.get(feature.id))
                : "grey"
            }
          >
            <title>
              
              {dataMap.get(feature.id)} {"- "}
              {feature.properties.name}, {stateNameToAbbreviation(states.get(feature.id.slice(0, 2)))}
              
            </title>
          </path>
        );
      })}
      <path className="interiors" d={path(UsaGeo[2])} />
    </g>
  );
};

export const dots = ({ points }) => (
  <g className="dots">
    {points.map((d) => {
      const [x, y] = projection([d.longitude, d.latitude]);
      return <circle cx={x} cy={y} r={5}></circle>;
    })}
  </g>
);
