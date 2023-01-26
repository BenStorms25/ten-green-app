import { geoIdentity, geoPath, select } from "d3";
import { DataFilter } from "./DataFilter";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { zoomInOnState } from "../components/ZoomInOnState";


const projection = geoIdentity().reflectY(false);
const path = geoPath(projection);

export const Marks = ({ UsaGeo, data, year, colorScale }) => {
  let [selectId, setSelectedId] = useState(null);

  let incomingID = useSelector((state) => state.id);

  useEffect(() => {
    setSelectedId(incomingID);
  }, [incomingID]);
  
  let dataMap = DataFilter(data, year, selectId);

  const states = new Map(
    UsaGeo[1].features.map((d) => [d.id, d.properties.name])
  );
  useEffect(() => {
    zoomInOnState();
  }, []);

  projection.fitExtent(
    [
      [0, 0],
      [975, 500],
    ],
    UsaGeo[0]
  );
  // UsaGeo[i] will return an obj with id and name

  // states refers to all the states

  // <path
  //           className="border"
  //           d={path(feature)}
  //           fill={
  //             colorScale(dataMap.get(feature.id))
  //               ? colorScale(dataMap.get(feature.id))
  //               : "grey"
  //           }
  //         ></path>

  return (
    <g className="marks">
      {UsaGeo[0].features.map((feature) => {
        return (
          
          <path
            className="border"
            d={path(feature)}
            onClick={() => setSelectedId(feature.id)
             }
            // onClick={() => console.log(feature.id)
            // }
            
            fill={
              colorScale(dataMap.get(feature.id))
                ? colorScale(dataMap.get(feature.id))
                : "grey"
            }
          >
            <title>
              {feature.properties.name}, {states.get(feature.id.slice(0, 2))}
              &#xA;{dataMap.get(feature.id)}
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
