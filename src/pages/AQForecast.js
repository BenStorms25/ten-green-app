import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import "./styles/Standards.css";

function AQForecast() {
  useEffect(() => {
    document.title = "AQ Forecast - 10Green";
  }, []);

  return (
    <div className="standards-page">
      <CustomHeader />
    </div>
  );
}

export default AQForecast;
