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

// transform matrix used by ZoomAndPan to manipulate svg values
class TransformMatrix {
  constructor(
    transform0,
    transform1,
    transform2,
    transform3,
    transform4,
    transform5,
    zoom
  ) {
    this.transform0 = transform0;
    this.transform1 = transform1;
    this.transform2 = transform2;
    this.transform3 = transform3;
    this.transform4 = transform4;
    this.transform5 = transform5;
    this.zoom = zoom;
  }
}

function MapNavigationTool() {
  const dispatch = useDispatch();

  // grab transform matrix values from redux
  const currentTransform0 = useSelector((state) => state.transform0);
  const currentTransform1 = useSelector((state) => state.transform1);
  const currentTransform2 = useSelector((state) => state.transform2);
  const currentTransform3 = useSelector((state) => state.transform3);
  const currentTransform4 = useSelector((state) => state.transform4);
  const currentTransform5 = useSelector((state) => state.transform5);
  const currentZoom = useSelector((state) => state.zoom);

  //constructs obj from values to be passed to pan/zoom function
  let currentPanAndZoom = new TransformMatrix(
    currentTransform0,
    currentTransform1,
    currentTransform2,
    currentTransform3,
    currentTransform4,
    currentTransform5,
    currentZoom
  );

  // update transform values in redux
  const updateTransformValues = () => {
    dispatch({
      type: "SET_TRANSFORM_0",
      payload: currentPanAndZoom.transform0,
    });
    dispatch({
      type: "SET_TRANSFORM_1",
      payload: currentPanAndZoom.transform1,
    });
    dispatch({
      type: "SET_TRANSFORM_2",
      payload: currentPanAndZoom.transform2,
    });
    dispatch({
      type: "SET_TRANSFORM_3",
      payload: currentPanAndZoom.transform3,
    });
    dispatch({
      type: "SET_TRANSFORM_4",
      payload: currentPanAndZoom.transform4,
    });
    dispatch({
      type: "SET_TRANSFORM_5",
      payload: currentPanAndZoom.transform5,
    });
    dispatch({
      type: "SET_ZOOM",
      payload: currentPanAndZoom.zoom,
    });
  };

  const handlePanLeft = () => {
    // zoom and pan is called, and is passed the values constructed above
    currentPanAndZoom = ZoomAndPan("left", currentPanAndZoom);
    updateTransformValues();
  };

  const handlePanUp = () => {
    currentPanAndZoom = ZoomAndPan("up", currentPanAndZoom);
    updateTransformValues();
  };

  const handlePanDown = () => {
    currentPanAndZoom = ZoomAndPan("down", currentPanAndZoom);
    updateTransformValues();
  };

  const handlePanRight = () => {
    currentPanAndZoom = ZoomAndPan("right", currentPanAndZoom);
    updateTransformValues();
  };

  const handleZoomIn = () => {
    currentPanAndZoom = ZoomAndPan("zoom_in", currentPanAndZoom);
    updateTransformValues();
  };

  const handleZoomOut = () => {
    currentPanAndZoom = ZoomAndPan("zoom_out", currentPanAndZoom);
    updateTransformValues();
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
