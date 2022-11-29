import React from "react";
import "./styles/FilterMaps.css";

function FilterMaps(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setCurrentMap(e.target.value);
  };

  return (
    <div className="filter-by">
      <p class="header-text">Filter By: </p>
      <div class="dropdown">
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
