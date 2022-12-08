import { geoIdentity, geoPath } from "d3";
import { DataFilter } from "./DataFilter";
import { useState } from "react";

const projection = geoIdentity().reflectY(false);
const path = geoPath(projection);

export const Marks = ({ UsaGeo, data, year, colorScale }) => {
  const [selectId, setSelectedId] = useState(null);
  let dataMap = DataFilter(data, year, selectId);

  const states = new Map(
    UsaGeo[1].features.map((d) => [d.id, d.properties.name])
  );

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
            onClick={() => setSelectedId(feature.id)}
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
