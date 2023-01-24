import React, { useEffect } from "react";
import "./styles/ToggleSites.css";

function ToggleSites({ viewSites, setViewSites }) {
  const toggleViewSites = () => {
    setViewSites(!viewSites);
  };
  return (
    <div>
      <p className="header-text">View Monitoring Sites:&nbsp; </p>
      <input
        type="checkbox"
        onChange={toggleViewSites}
        defaultChecked={viewSites}
      ></input>
    </div>
  );
}

export default ToggleSites;

export default ToggleSites;