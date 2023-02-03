// takes an operation as well as the current pan and zoom of the map
export function ZoomAndPan(operation, currentPanAndZoom) {
  let svg = document.getElementById("homepage-map-svg");
  // wait until DOM is loaded
  if (!svg) {
    return;
  }

  // create initial svg matrix to describe svg viewbox
  var transformMatrix;

  if (!currentPanAndZoom) {
    transformMatrix = [1.2, 0, 0, 1.2, -63, 9];
  } else {
    transformMatrix = [
      currentPanAndZoom.transform0,
      currentPanAndZoom.transform1,
      currentPanAndZoom.transform2,
      currentPanAndZoom.transform3,
      currentPanAndZoom.transform4,
      currentPanAndZoom.transform5,
    ];
  }

  var viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
  var centerX = parseFloat(viewbox[2]) / 2;
  var centerY = parseFloat(viewbox[3]) / 2;
  var matrixGroup = svg.getElementById("matrix-group");

  // pan on svg
  function pan(dx, dy) {
    transformMatrix[4] += dx;
    transformMatrix[5] += dy;

    var newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
    console.log(transformMatrix);
    if (!currentPanAndZoom) {
      return;
    }

    // reassign x and y vals to be sent back to react comp.
    currentPanAndZoom.transform4 = transformMatrix[4];
    currentPanAndZoom.transform5 = transformMatrix[5];
  }

  // zoom on svg
  function zoom(scale) {
    for (var i = 0; i < 4; i++) {
      transformMatrix[i] *= scale;
    }
    transformMatrix[4] += (1 - scale) * centerX;
    transformMatrix[5] += (1 - scale) * centerY;

    var newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
    console.log(transformMatrix);
    if (!currentPanAndZoom) {
      return;
    }

    // reassign all values for currentPanandZoom to be sent back to react comp.
    currentPanAndZoom.transform0 = transformMatrix[0];
    currentPanAndZoom.transform1 = transformMatrix[1];
    currentPanAndZoom.transform2 = transformMatrix[2];
    currentPanAndZoom.transform3 = transformMatrix[3];
    currentPanAndZoom.transform4 = transformMatrix[4];
    currentPanAndZoom.transform5 = transformMatrix[5];
    currentPanAndZoom.zoom = currentPanAndZoom.zoom * scale;
    console.log(transformMatrix);
  }

  // initial view of map
  // function resetZoom() {
  //   // initial values
  //   return;
  //   // pan(40, 65);
  //   // zoom(1.2);
  // }
  // perform pan or zoom based on operation, then return changed value
  if (operation === "up") {
    pan(0, 25);
    return currentPanAndZoom;
  } else if (operation === "down") {
    pan(0, -25);
    return currentPanAndZoom;
  } else if (operation === "left") {
    pan(25, 0);
    return currentPanAndZoom;
  } else if (operation === "right") {
    pan(-25, 0);
    return currentPanAndZoom;
  } else if (operation === "zoom_in") {
    zoom(1.1);
    return currentPanAndZoom;
  } else if (operation === "zoom_out") {
    zoom(0.9);
    return currentPanAndZoom;
  } else {
    pan(0, 0);
  }

  // when state is clicked, navigate to that state.  One way it COULD work
  // switch (state) {
  //   case "AL":
  //     AL();
  //     break;
  //   case "AK":
  //     AK();
  //     break;
  //   case "AZ":
  //     AZ();
  //     break;
  //   case "AR":
  //     AR();
  //     break;
  //   case "CA":
  //     CA();
  //     break;
  //   case "CO":
  //     CO();
  //     break;
  //   case "CT":
  //     CT();
  //     break;
  //   case "DE":
  //     DE();
  //     break;
  //   case "FL":
  //     FL();
  //     break;
  //   case "GA":
  //     GA();
  //     break;
  //   case "HI":
  //     HI();
  //     break;
  //   case "ID":
  //     ID();
  //     break;
  //   case "IA":
  //     IA();
  //     break;
  //   case "IN":
  //     IN();
  //     break;
  //   case "IL":
  //     IL();
  //     break;
  //   case "KS":
  //     KS();
  //     break;
  //   case "KY":
  //     KY();
  //     break;
  //   case "LA":
  //     LA();
  //     break;
  //   case "ME":
  //     ME();
  //     break;
  //   case "MD":
  //     MD();
  //     break;
  //   case "MA":
  //     MA();
  //     break;
  //   case "MI":
  //     MI();
  //     break;
  //   case "MN":
  //     MN();
  //     break;
  //   case "MS":
  //     MS();
  //     break;
  //   case "MO":
  //     MO();
  //     break;
  //   case "MT":
  //     MT();
  //     break;
  //   case "NE":
  //     NE();
  //     break;
  //   case "NV":
  //     NV();
  //     break;
  //   case "NH":
  //     NH();
  //     break;
  //   case "NJ":
  //     NJ();
  //     break;
  //   case "NM":
  //     NM();
  //     break;
  //   case "NC":
  //     NC();
  //     break;
  //   case "NY":
  //     NY();
  //     break;
  //   case "ND":
  //     ND();
  //     break;
  //   case "OH":
  //     OH();
  //     break;
  //   case "OK":
  //     OK();
  //     break;
  //   case "OR":
  //     OR();
  //     break;
  //   case "PA":
  //     PA();
  //     break;
  //   case "RI":
  //     RI();
  //     break;
  //   case "SC":
  //     SC();
  //     break;
  //   case "SD":
  //     SD();
  //     break;
  //   case "TN":
  //     TN();
  //     break;
  //   case "TX":
  //     TX();
  //     break;
  //   case "UT":
  //     UT();
  //     break;
  //   case "VT":
  //     VT();
  //     break;
  //   case "VA":
  //     VA();
  //     break;
  //   case "WA":
  //     WA();
  //     break;
  //   case "WI":
  //     WI();
  //     break;
  //   case "WV":
  //     WV();
  //     break;
  //   case "WY":
  //     WY();
  //     break;
  //   default:
  //     resetZoom();
  // }

  // function AL() {
  //   zoom(3.5);
  //   pan(-450, -160);
  // }
  // function AK() {
  //   zoom(3);
  //   pan(1050, -400);
  // }
  // function AZ() {
  //   zoom(3);
  //   pan(790, -30);
  // }
  // function AR() {
  //   zoom(4.5);
  //   pan(-150, -75);
  // }
  // function CA() {
  //   zoom(2.5);
  //   pan(900, 200);
  // }
  // function CO() {
  //   zoom(3.2);
  //   pan(530, 225);
  // }
  // function CT() {
  //   zoom(6.5);
  //   pan(-2000, 980);
  // }
  // function DE() {
  //   zoom(6.5);
  //   pan(-1800, 620);
  // }
  // function FL() {
  //   zoom(3);
  //   pan(-600, -360);
  // }
  // function GA() {
  //   zoom(3.5);
  //   pan(-650, -160);
  // }
  // function HI() {
  //   zoom(3);
  //   pan(570, -450);
  // }
  // function ID() {
  //   zoom(3.2);
  //   pan(850, 650);
  // }
  // function IA() {
  //   zoom(4.5);
  //   pan(-80, 550);
  // }
  // function IN() {
  //   zoom(4.5);
  //   pan(-520, 400);
  // }
  // function IL() {
  //   zoom(4.5);
  //   pan(-370, 380);
  // }
  // function KS() {
  //   zoom(4.5);
  //   pan(200, 250);
  // }
  // function KY() {
  //   zoom(4.5);
  //   pan(-600, 250);
  // }
  // function LA() {
  //   zoom(3.5);
  //   pan(-150, -300);
  // }
  // function ME() {
  //   zoom(3.5);
  //   pan(-1200, 800);
  // }
  // function MD() {
  //   zoom(6.5);
  //   pan(-1700, 620);
  // }
  // function MA() {
  //   zoom(6.5);
  //   pan(-2050, 1080);
  // }
  // function MI() {
  //   zoom(4.5);
  //   pan(-600, 750);
  // }
  // function MN() {
  //   zoom(3.5);
  //   pan(-50, 700);
  // }
  // function MS() {
  //   zoom(3.5);
  //   pan(-250, -160);
  // }
  // function MO() {
  //   zoom(4);
  //   pan(-120, 250);
  // }
  // function MT() {
  //   zoom(3.2);
  //   pan(650, 650);
  // }
  // function NE() {
  //   zoom(4.5);
  //   pan(300, 500);
  // }
  // function NV() {
  //   zoom(3.2);
  //   pan(1030, 275);
  // }
  // function NH() {
  //   zoom(6.5);
  //   pan(-2050, 1300);
  // }
  // function NJ() {
  //   zoom(6.5);
  //   pan(-1850, 780);
  // }
  // function NM() {
  //   zoom(3);
  //   pan(500, -30);
  // }
  // function NC() {
  //   zoom(4.5);
  //   pan(-1000, 100);
  // }
  // function NY() {
  //   zoom(4.5);
  //   pan(-1200, 780);
  // }
  // function ND() {
  //   zoom(4.2);
  //   pan(300, 900);
  // }
  // function OH() {
  //   zoom(4.5);
  //   pan(-750, 450);
  // }
  // function OK() {
  //   zoom(4.5);
  //   pan(200, 0);
  // }
  // function OR() {
  //   zoom(3);
  //   pan(1000, 600);
  // }
  // function PA() {
  //   zoom(4.5);
  //   pan(-1100, 580);
  // }
  // function RI() {
  //   zoom(6.5);
  //   pan(-2100, 980);
  // }
  // function SC() {
  //   zoom(4.5);
  //   pan(-1000, -100);
  // }
  // function SD() {
  //   zoom(4.2);
  //   pan(300, 700);
  // }
  // function TN() {
  //   zoom(4.5);
  //   pan(-600, 50);
  // }
  // function TX() {
  //   zoom(2.5);
  //   pan(200, -180);
  // }
  // function UT() {
  //   zoom(3.2);
  //   pan(780, 300);
  // }
  // function VT() {
  //   zoom(6.5);
  //   pan(-1950, 1250);
  // }
  // function VA() {
  //   zoom(4.5);
  //   pan(-1050, 250);
  // }
  // function WA() {
  //   zoom(3);
  //   pan(1000, 700);
  // }
  // function WI() {
  //   zoom(3.5);
  //   pan(-200, 620);
  // }
  // function WV() {
  //   zoom(4.5);
  //   pan(-920, 350);
  // }
  // function WY() {
  //   zoom(3.2);
  //   pan(580, 470);
  // }
}
