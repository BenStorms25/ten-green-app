import { geoIdentity, geoPath } from "d3";
import { DataFilter } from "./DataFilter";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import stateNameToAbbreviation from "../../Abbrevinator.js";
import "../../styles/Marks.css";

const projection = geoIdentity().reflectY(false);
const path = geoPath(projection);

export const Marks =  ({ UsaGeo, data, year, colorScale, maximum }) => {
  let inputRef = React.createRef();
  let [selectId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  let incomingID = useSelector((state) => state.id);
  let [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gist.githubusercontent.com/Edaran123/76cf49719d46fc93251588f197010977/raw/4b957a5804f031454c0170177941ba029efaecd9/allData.json");
        setAllData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  let dataMap = null;
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

  if (!allData) {
    return null; // Render nothing until dataMap is available
  }

  if (allData) {
    dataMap = DataFilter(allData, data, year, selectId);
  return (
    <g className="marks">
      {UsaGeo[0].features.map((feature) => {
        return (
          <path
            ref={inputRef}
            className={feature.id === incomingID ? "border2" : "border"}
            d={path(feature)}
            onClick={() => dispatch({ type: "SET_ID", payload: feature.id })}
            fill={
              colorScale(dataMap.get(feature.id))
                ? colorScale(dataMap.get(feature.id) - maximum / 10.0)
                : "grey"
            }
          >
            <title>
              {dataMap.get(feature.id)} {"- "}
              {feature.properties.name},{" "}
              {stateNameToAbbreviation(states.get(feature.id.slice(0, 2)))}
            </title>

            <div className="tooltiptext">Tooltip text</div>
          </path>
        );
      })}
      <path className="interiors" d={path(UsaGeo[2])} />
    </g>
  );
};
}


export const dots = ({ points }) => (
  <g className="dots">
    {points.map((d) => {
      const [x, y] = projection([d.longitude, d.latitude]);
      return <circle cx={x} cy={y} r={5}></circle>;
    })}
  </g>
);
