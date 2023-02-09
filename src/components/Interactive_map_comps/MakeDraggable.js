// used in interactive map svg
export function MakeDraggable(state = "none") {
  // grab svg and g
  var svgCanvas = document.getElementById("homepage-map-svg");
  var viewPort = document.getElementById("matrix-group");
  // set initial values
  var drag = false;
  var offset = { x: 0, y: 0 };
  var factor = 0.02;
  var matrix = new DOMMatrix();
  console.log("initial matrix: " + matrix);

  // attatch event listeners

  // enable drag
  svgCanvas.addEventListener("pointerdown", function (event) {
    drag = true;
    offset = { x: event.offsetX, y: event.offsetY };
  });

  // sense when dragging
  svgCanvas.addEventListener("pointermove", function (event) {
    if (drag) {
      var tx = event.offsetX - offset.x;
      var ty = event.offsetY - offset.y;
      console.log(tx, ty);
      offset = {
        x: event.offsetX,
        y: event.offsetY,
      };

      matrix.preMultiplySelf(new DOMMatrix().translateSelf(tx, ty));
      console.log("mousemove matrix: " + matrix);
      viewPort.style.transform = matrix.toString();
    }
  });

  // disable drag
  svgCanvas.addEventListener("pointerup", function (event) {
    drag = false;
  });

  // zoom
  svgCanvas.addEventListener("wheel", function (event) {
    event.preventDefault();
    var zoom = event.deltaY > 0 ? -1 : 1;
    var scale = 1 + factor * zoom;
    offset = {
      x: event.offsetX,
      y: event.offsetY,
    };
    matrix.preMultiplySelf(
      new DOMMatrix()
        .translateSelf(offset.x, offset.y)
        .scaleSelf(scale, scale)
        .translateSelf(-offset.x, -offset.y)
    );
    console.log("zoom matrix: " + matrix);
    viewPort.style.transform = matrix.toString();
  });

  // update has listenener val in redux
}
