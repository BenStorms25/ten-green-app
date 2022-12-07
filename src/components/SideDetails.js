import React from "react";
import "./styles/SideDetails.css";

function SideDetails() {
  return (
    <div className="side-details">
      <label className="e-float-text e-label-top">10Green Score: </label>
      <input type="text" required={true} readOnly={true} value="John" />
      <label className="e-float-text e-label-top">AQI: </label>
      <input type="text" required={true} readOnly={true} value="John" />
    </div>
  );
}

export default SideDetails;
