import React, { useEffect, useState } from "react";
import MapApp from "../Interactive-Map-Source";
import HomepageMap from "../Homepage-map";
import FilterMaps from "./FilterMaps";
import ToggleSites from "./ToggleSites";
import "./styles/InteractiveMap.css";
import useWindowSize from "./useWindowSize";
import SideDetails from "./SideDetails";

function InteractiveMap() {
  const [currentMap, setCurrentMap] = useState("");
  // swap mounted back and forth until svg can be identified
  const [mounted, setMounted] = useState(true);
  const [viewSites, setViewSites] = useState(true);

  const [countyName, setCountyName] = useState("Penobscot, Maine");
  const [tenGreenScore, setTenGreenScore] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [ozone, setOzone] = useState(null);
  const [pm25, setPm25] = useState(null);
  const [pm10, setPm10] = useState(null);
  const [so2, setSo2] = useState(null);
  const [no2, setNo2] = useState(null);
  const [no, setNo] = useState(null);
  const [nickel, setNickel] = useState(null);
  const [lead, setLead] = useState(null);
  const [co, setCo] = useState(null);
  const [cadmium, setCadmium] = useState(null);
  const [arsenic, setArsenic] = useState(null);

  let windowSize = useWindowSize();

  function styleMap() {
    let USMap = document.getElementById("homepage-map-svg");
    // wait until DOM is loaded
    if (!USMap) {
      return;
    }
    USMap.classList.add("USMap");
  }

  function shrinkMapWithContainer() {
    let svg = document.getElementById("interactive-map-svg");
    // wait until DOM is loaded
    if (!svg) {
      // swap mounted, triggering useEffect again
      setMounted(!mounted);
      return;
    }

    const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
      const { x, y, width, height } = el.getBBox();
      if (!acc.xMin || x < acc.xMin) acc.xMin = x;
      if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
      if (!acc.yMin || y < acc.yMin) acc.yMin = y;
      if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
      return acc;
    }, {});

    const viewbox = `${xMin} ${yMin} ${xMax - xMin} ${yMax - yMin}`;

    svg.setAttribute("viewBox", viewbox);
  }

  useEffect(() => {
    // every render get width
    shrinkMapWithContainer();
    styleMap();
  }, []);

  // options to filter by pollutant
  const mapOptions = [
    { value: "", text: "Default" },
    { value: "ozone", text: "Ozone" },
    { value: "nitrogen", text: "Nitrogen" },
    { value: "co2", text: "CO2" },
  ];

  const mapValueProps = {
    setCountyName,
    setAqi,
    setArsenic,
    setCadmium,
    setCo,
    setLead,
    setNickel,
    setNo,
    setNo2,
    setOzone,
    setPm10,
    setPm25,
    setSo2,
    setTenGreenScore,
  };

  function renderMap(currentMap) {
    // alternate between maps based on selection
    if (currentMap === "") {
      //return <MapApp viewSites={viewSites} />;
      //return <HomepageMap {...mapValueProps} />;
      return (
        <HomepageMap
          setCountyName={setCountyName}
          setTenGreenScore={setTenGreenScore}
          setAqi={setAqi}
          setArsenic={setArsenic}
          setCadmium={setCadmium}
          setCo={setCo}
          setLead={setLead}
          setNickel={setNickel}
          setNo={setNo}
          setNo2={setNo2}
          setOzone={setOzone}
          setPm10={setPm10}
          setPm25={setPm25}
          setSo2={setSo2}
        />
      );
    } else if (currentMap === "ozone") {
      return <MapApp />;
    } else if (currentMap === "nitrogen") {
      return <p></p>;
    } else if (currentMap === "co2") {
      return <p></p>;
    }
  }
  return (
    <div id="interactive-map">
      <div className="map-and-details">
        <HomepageMap />
        <SideDetails />
      </div>
    </div>
  );
}

export default InteractiveMap;
