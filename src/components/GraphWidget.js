import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import "./styles/GraphWidget.css";
import { Title_Formatter } from "./Title_Formatter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{` ${payload[0].value} `}</p>
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
  return (
    <div id="graphwidget">
      <div style={styles}>
        <ResponsiveContainer width={"105%"} height={300}>
          <LineChart
            width={800}
            height={300}
            data={data}
            //margin={{ top: 5, right: 20, bottom: 5, left: 0 }}

            margin={{
              top: 50,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <text
              x={180}
              y={20}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
            >
              <tspan fontSize="14">
                {county}, {Title_Formatter(current_measure)} Score over time
              </tspan>
            </text>
            <Line
              type="monotone"
              dataKey="value.x"
              stroke="#bde59c"
              dot={false}
              strokeWidth={4}
            />
            <XAxis
              dataKey="year"
              type={"category"}
              interval={4}
              minTickGap={5}
              tickLine={true}
              domain={["dataMin", "dataMax"]}
            />
            <YAxis type="number" domain={[0, max]} />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              content={<CustomTooltip />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphWidget;
