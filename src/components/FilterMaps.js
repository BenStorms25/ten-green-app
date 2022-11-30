import React from "react";
import "./styles/FilterMaps.css";

function FilterMaps(props) {
  const handleChange = (e) => {
    props.setCurrentMap(e.target.value);
  };

  return (
    <div className="filter-by">
      <p className="header-text">Filter Map By:&nbsp; </p>
      <div className="dropdown">
        <select value={props.currentMap} onChange={handleChange}>
          {props.mapOptions.map((mapOption) => (
            <option key={mapOption.value} value={mapOption.value}>
              {mapOption.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterMaps;
