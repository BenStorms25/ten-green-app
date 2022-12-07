import React, { useState } from "react";
import "./styles/SideDetails.css";

function SideDetails() {
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
