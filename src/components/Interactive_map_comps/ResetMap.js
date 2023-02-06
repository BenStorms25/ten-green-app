import React from "react";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResetMap() {
  const handleRefresh = () => {
    var viewPort = document.getElementById("matrix-group");
    viewPort.style.transform = "matrix(1,0,0,1,-35.25,25.75)";
  };
  return (
    <div className="refresh-div">
      <FontAwesomeIcon
        className="refresh-icon"
        onClick={handleRefresh}
        icon={faRefresh}
      />
    </div>
  );
}

export default ResetMap;
