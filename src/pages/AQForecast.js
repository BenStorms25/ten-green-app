import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import "./styles/Standards.css";
import "./styles/AQForecast.css";

function AQForecast() {
  useEffect(() => {
    document.title = "AQ Forecast - 10Green";
  }, []);

  return (
    <div className="standards-page">
      <CustomHeader />
      <iframe src="https://climatereanalyzer.org/wx/fcst/?mdl_id=aqm&dm_id=conus-lc3&wm_id=pm25"></iframe>
    </div>
  );
}

export default AQForecast;
