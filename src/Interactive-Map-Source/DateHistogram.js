import {
	scaleLinear,
	scaleTime,
	max,
	timeFormat,
	extent,
	//histogram as bin,
  bin,
	timeMonths,
	mean 
} from 'd3';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };

export const Marks = ({
  binnedData,
  xScale,
  yScale,
  innerHeight
}) =>
  binnedData.map(d => (
    <rect
      className="mark"
      x={xScale(d.x0)} 
      y={yScale(d.y)} 
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.y)}
    >
      <title> worked </title>
    </rect>
  ));

export const DateHistogram = ({ data }) => {
	const xValue = d => d.dateCollected;
	const xAxisLabel = 'Time';

  const yValue = d => d.AQI;
  const yAxisLabel = 'AQI Value';
  
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xAxisTickFormat = timeFormat('%b');

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
  	.nice();

  const [start, stop] = xScale.domain();
  
  const binnedData = bin()
  	.value(xValue)
  	.domain(xScale.domain())
  	.thresholds(timeMonths(start, stop))(data)
  	.map(array => ({
      y: mean(array, yValue),
      x0: array.x0,
      x1: array.x1
    }));
  
  const yScale = scaleLinear()
  	.domain([0, max(binnedData, d => d.y)])
  	.range([innerHeight, 0]);
  
  return (
 		<g transform={`translate(${margin.left},${margin.top})`}>
    	<Marks
      	binnedData={binnedData}
        xScale={xScale}
        yScale={yScale}
        circleRadius={4}
        innerHeight={innerHeight}
      />
    </g>
  );
};