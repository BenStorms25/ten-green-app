import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import "./styles/Standards.css";
import "./styles/AQForecast.css";

import forecast from "../aqm_fcst/index.html"
function AQForecast() {
  useEffect(() => {
    document.title = "AQ Forecast - 10Green";
  }, []);

  return (
    <div className="standards-page">
      <CustomHeader />
      <div id="my-div">
      <iframe src="https://climatereanalyzer.org/wx/fcst/?mdl_id=aqm&dm_id=conus-lc3&wm_id=pm25" id="my-iframe" scrolling="no"></iframe>
      </div>
      {/* <div dangerouslySetInnerHTML={{__html: forecast}}/> */}
    </div>
  );
}

export default AQForecast;
