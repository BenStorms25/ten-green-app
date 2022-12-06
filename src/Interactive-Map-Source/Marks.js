import { geoAlbersUsa, geoPath } from "d3";

const projection = geoAlbersUsa();
const path = geoPath(projection);

export const Marks = ({
  USAtlas: { states, interiors },
  data,
  sizeScale,
  sizeValue,
  viewSites,
}) => (
  <g className="marks">
    {states.features.map((feature) => (
      <path className="states" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
    {data.map((d) => {
      const [x, y] = projection([d.longitude, d.latitude]);
      // return data point for site
      return (
        <>
          {viewSites ? (
            <circle cx={x} cy={y} r={sizeScale(sizeValue(d))}>
              <title> place holder for 10 green score </title>
            </circle>
          ) : (
            <></>
          )}
        </>
      );
    })}
  </g>
);
