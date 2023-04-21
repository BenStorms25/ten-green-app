import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { useSelector } from "react-redux";
import "./styles/GraphWidget.css";
import { Title_Formatter } from "./Title_Formatter";
import { ScaleFormatter } from "../components/ScaleFormatter";
import * as d3 from "d3";



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  textDecoration: "none",
};
const mobileStyles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  textDecoration: "none",
  position: "relative",
  right: "1rem",
};
const isMobile = window.innerWidth > 500;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{` (${payload[0].payload.year}) - ${payload[0].value} `}</p>
      </div>
    );
  }

  return null;
};

export const GraphWidget = ({ data, max }) => {
  // let currentID = useSelector((state) => state.id);
  // let dataMap = DataFilter(data, year, currentID);
  const county = useSelector((state) => state.county);
  const current_measure = useSelector((state) => state.current_measure);
  const reduxYear = useSelector((state) => state.title_year);

  let maximum = ScaleFormatter(current_measure);



  let colorScale = d3
    .scaleSequential(d3.interpolateRdYlGn)
    .domain([0, maximum]);
  if (current_measure !== "10green") {
    colorScale = d3.scaleSequential(d3.interpolateYlGnBu).domain([0, maximum]);
  }



  return (
    <div id="graphwidget">
      <div style={isMobile ? styles : mobileStyles}>
        <ResponsiveContainer
          width={isMobile ? "100%" : "110%"}
          height={200}
          zoom={0.8}
        >
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 50,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <text
              class="second"
              x={180}
              y={20}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
              cursor="auto"
              text-decoration="none"
            >
              <tspan fontSize="16" style={{ textDecoration: "none" }}>
                {county} - {Title_Formatter(current_measure)} Score Over Time
              </tspan>
            </text>

            <XAxis
              dataKey="year"
              type={"category"}
              interval={window.innerWidth > 460 ? 4 : 5}
              minTickGap={5}
              tickLine={true}
              domain={["dataMin", "dataMax"]}
            />
            <YAxis type="number" domain={[0, max]} />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              content={<CustomTooltip />}
            />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    //entry.year === parseInt(reduxYear) ? "#a9f26d" : "#82ca9d"
                    colorScale(entry.value - maximum / 10.0 )
                    
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphWidget;
