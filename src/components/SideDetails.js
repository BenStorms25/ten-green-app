import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles/SideDetails.css";

function SideDetails() {
  const countyName = useSelector((state) => state.countyName);
  const tenGreenScore = useSelector((state) => state.tenGreenScore);
  const aqi = useSelector((state) => state.aqi);
  const arsenic = useSelector((state) => state.arsenic);
  const cadmium = useSelector((state) => state.cadmium);
  const co = useSelector((state) => state.co);
  const lead = useSelector((state) => state.lead);
  const nickel = useSelector((state) => state.nickel);
  const no = useSelector((state) => state.no);
  const no2 = useSelector((state) => state.no2);
  const ozone = useSelector((state) => state.ozone);
  const pm10 = useSelector((state) => state.pm10);
  const pm25 = useSelector((state) => state.pm25);
  const so2 = useSelector((state) => state.so2);

  return (
    <div className="side-details">
      <h6>{countyName}</h6>

      <label className="e-float-text e-label-top">10Green Score </label>
      <input
        type="text"
        required={true}
        readOnly={true}
        value={tenGreenScore}
      />
      <label className="e-float-text e-label-top">AQI </label>
      <input type="text" required={true} readOnly={true} value={aqi} />
      <label className="e-float-text e-label-top">Ozone </label>
      <input type="text" required={true} readOnly={true} value={ozone} />
      <label className="e-float-text e-label-top">PM25 </label>
      <input type="text" required={true} readOnly={true} value={pm25} />
      <label className="e-float-text e-label-top">PM10 </label>
      <input type="text" required={true} readOnly={true} value={pm10} />
      <label className="e-float-text e-label-top">SO2 </label>
      <input type="text" required={true} readOnly={true} value={so2} />
      <label className="e-float-text e-label-top">NO2 </label>
      <input type="text" required={true} readOnly={true} value={no2} />
      <label className="e-float-text e-label-top">NO </label>
      <input type="text" required={true} readOnly={true} value={no} />
      <label className="e-float-text e-label-top">Nickel </label>
      <input type="text" required={true} readOnly={true} value={nickel} />
      <label className="e-float-text e-label-top">Lead </label>
      <input type="text" required={true} readOnly={true} value={lead} />
      <label className="e-float-text e-label-top">CO </label>
      <input type="text" required={true} readOnly={true} value={co} />
      <label className="e-float-text e-label-top">Cadmium </label>
      <input type="text" required={true} readOnly={true} value={cadmium} />
      <label className="e-float-text e-label-top">Arsenic </label>
      <input type="text" required={true} readOnly={true} value={arsenic} />
    </div>
  );
}

export default SideDetails;
