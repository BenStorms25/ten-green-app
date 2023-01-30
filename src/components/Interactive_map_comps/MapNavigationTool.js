import React from "react";
import { ZoomAndPan } from "./ZoomAndPan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./styles/MapNavigationTool.css";

// zoom and pan class used to pass zoom and pan values around
class ZoomPan {
  constructor(x, y, zoom) {
    this.x = x;
    this.y = y;
    this.zoom = zoom;
  }
}

function MapNavigationTool() {
  const dispatch = useDispatch();

  // grabs values from redux
  const currentX = useSelector((state) => state.panX);
  const currentY = useSelector((state) => state.panY);
  const currentZoom = useSelector((state) => state.zoom);

  //constructs obj from values to be passed to pan/zoom function
  const currentPanAndZoom = new ZoomPan(currentX, currentY, currentZoom);

  const handlePanLeft = () => {
    // zoom and pan is called, and is passed the values constructed above
    const newX = ZoomAndPan("left", currentPanAndZoom);
    dispatch({ type: "SET_PAN_X", payload: newX });
  };

  const handlePanUp = () => {
    const newY = ZoomAndPan("up", currentPanAndZoom);
    dispatch({ type: "SET_PAN_Y", payload: newY });
  };

  const handlePanDown = () => {
    const newY = ZoomAndPan("down", currentPanAndZoom);
    dispatch({ type: "SET_PAN_Y", payload: newY });
  };

  const handlePanRight = () => {
    const newX = ZoomAndPan("right", currentPanAndZoom);
    dispatch({ type: "SET_PAN_X", payload: newX });
  };

  const handleZoomIn = () => {
    let newZoom = ZoomAndPan("zoom_in", currentPanAndZoom);
    dispatch({ type: "SET_ZOOM", payload: newZoom });
  };

  const handleZoomOut = () => {
    let newZoom = ZoomAndPan("zoom_out", currentPanAndZoom);
    dispatch({ type: "SET_ZOOM", payload: newZoom });
  };

  return (
    <div className="navigation-tool-wrapper">
      <div className="left-arrow">
        <FontAwesomeIcon
          className="left-arrow"
          onClick={handlePanLeft}
          icon={faCaretLeft}
        />
      </div>
      <div className="up-down-zoom-arrows">
        <FontAwesomeIcon
          className="arrow"
          onClick={handlePanUp}
          icon={faCaretUp}
        />
        <FontAwesomeIcon
          className="plus-and-minus"
          onClick={handleZoomIn}
          icon={faPlus}
        />
        <FontAwesomeIcon
          className="plus-and-minus"
          onClick={handleZoomOut}
          icon={faMinus}
        />
        <FontAwesomeIcon
          className="arrow"
          onClick={handlePanDown}
          icon={faCaretDown}
        />
      </div>
      <div className="right-arrow">
        <FontAwesomeIcon
          className="right-arrow"
          onClick={handlePanRight}
          icon={faCaretRight}
        />
      </div>
    </div>
  );
}

export default MapNavigationTool;
