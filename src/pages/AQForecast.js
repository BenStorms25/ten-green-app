import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import "./styles/Standards.css";
import "./styles/AQForecast.css";
import { useDispatch } from "react-redux";
import forecast from "../aqm_fcst/index.html";
import CustomFooter from "../components/CustomFooter";

function AQForecast() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "AQ Forecast - 10Green";
    // handle problem of incorrect map being displayed after navigating to different page
    dispatch({ type: "SET_CURRENT_MEASURE", payload: "10green" });
  }, []);

  return (
    <div className="standards-page">
      <CustomHeader />
      <div id="my-div">
        <iframe
          src="https://climatereanalyzer.org/wx/fcst/?mdl_id=aqm&dm_id=conus-lc3&wm_id=pm25"
          id="my-iframe"
          scrolling="no"
          title="aqforecast"
        ></iframe>
      </div>
      {/* <div dangerouslySetInnerHTML={{__html: forecast}}/> */}
      <CustomFooter />
    </div>
  );
}

export default AQForecast;
