export default function getStateMatrix(state = "ME") {
  //when passed a state code, return DOMMatrix for that state

  // currently they all zoom to maine.  Does not make sense to hard code values for these before we have a completed design.
  switch (state) {
    case "AL":
      return new DOMMatrix([3.67, 0, 0, 3.67, -2081, -1065]);
    case "AK":
      return new DOMMatrix([2.8, 0, 0, 2.8, -119, -953]);
    case "AZ":
      return new DOMMatrix([3.2, 0, 0, 3.2, -485, -742]);
    case "AR":
      return new DOMMatrix([3.1, 0, 0, 3.1, -1392, -737]);
    case "CA":
      return new DOMMatrix([1.72, 0, 0, 1.72, 103, -139]);
    case "CO":
      return new DOMMatrix([3.8, 0, 0, 3.8, -1085, -664]);
    case "CT":
      return new DOMMatrix([6, 0, 0, 6, -4731, -652]);
    case "DE":
      return new DOMMatrix([6, 0, 0, 6, -4538, -985]);
    case "FL":
      return new DOMMatrix([3, 0, 0, 3, -1854, -1039]);
    case "GA":
      return new DOMMatrix([3.22, 0, 0, 3.22, -1932, -888]);
    case "HI":
      return new DOMMatrix([2.82, 0, 0, 2.82, -576, -1089]);
    case "ID":
      return new DOMMatrix([2.6, 0, 0, 2.6, -314, -15]);
    case "IA":
      return new DOMMatrix([4.05, 0, 0, 4.05, -1895, -471]);
    case "IN":
      return new DOMMatrix([4.3, 0, 0, 4.3, -2425, -694]);
    case "IL":
      return new DOMMatrix([4.05, 0, 0, 4.05, -2118, -651]);
    case "KS":
      return new DOMMatrix([3.707, 0, 0, 3.707, -1423, -684]);
    case "KY":
      return new DOMMatrix([4.27, 0, 0, 4.27, -2511, -827]);
    case "LA":
      return new DOMMatrix([4.57, 0, 0, 4.57, -2295, -1532]);
    case "ME":
      return new DOMMatrix([3.75, 0, 0, 3.75, -2820, -10]);
    case "MD":
      return new DOMMatrix([5.36, 0, 0, 5.36, -3905, -883]);
    case "MA":
      return new DOMMatrix([5.31, 0, 0, 5.31, -4159, -466]);
    case "MI":
      return new DOMMatrix([3.2, 0, 0, 3.2, -1774, -177]);
    case "MN":
      return new DOMMatrix([3.02, 0, 0, 3.02, -1276, -51]);
    case "MS":
      return new DOMMatrix([3.31, 0, 0, 3.31, -1647, -936]);
    case "MO":
      return new DOMMatrix([3.52, 0, 0, 3.52, -1624, -616]);
    case "MT":
      return new DOMMatrix([3.14, 0, 0, 3.14, -676, 12]);
    case "NE":
      return new DOMMatrix([3.58, 0, 0, 3.58, -1252, -440]);
    case "NV":
      return new DOMMatrix([2.79, 0, 0, 2.79, -204, -351]);
    case "NH":
      return new DOMMatrix([5.49, 0, 0, 5.49, -4298, -325]);
    case "NJ":
      return new DOMMatrix([6.27, 0, 0, 6.27, -4811, -883]);
    case "NM":
      return new DOMMatrix([2.95, 0, 0, 2.95, -669, -689]);
    case "NC":
      return new DOMMatrix([4.47, 0, 0, 4.47, -3065, -1016]);
    case "NY":
      return new DOMMatrix([5.57, 0, 0, 5.57, -4137, -491]);
    case "ND":
      return new DOMMatrix([3.47, 0, 0, 3.47, -1219, -7]);
    case "OH":
      return new DOMMatrix([4.31, 0, 0, 4.31, -2686, -630]);
    case "OK":
      return new DOMMatrix([3.25, 0, 0, 3.25, -1240, -739]);
    case "OR":
      return new DOMMatrix([3.13, 0, 0, 3.13, -185, -55]);
    case "PA":
      return new DOMMatrix([4.22, 0, 0, 4.22, -2925, -495]);
    case "RI":
      return new DOMMatrix([11.6, 0, 0, 11.6, -9641, -1446]);
    case "SC":
      return new DOMMatrix([4.83, 0, 0, 4.83, -3282, -1303]);
    case "SD":
      return new DOMMatrix([3.47, 0, 0, 3.47, -1237, -201]);
    case "TN":
      return new DOMMatrix([3.83, 0, 0, 3.83, -2205, -879]);
    case "TX":
      return new DOMMatrix([2.287, 0, 0, 2.287, -671, -636]);
    case "UT":
      return new DOMMatrix([3.43, 0, 0, 3.43, -642, -477]);
    case "VT":
      return new DOMMatrix([6.56, 0, 0, 6.56, -5130, -442]);
    case "VA":
      return new DOMMatrix([4.67, 0, 0, 4.67, -3233, -868]);
    case "WA":
      return new DOMMatrix([3.68, 0, 0, 3.68, -371, 104]);
    case "WI":
      return new DOMMatrix([4.13, 0, 0, 4.13, -2109, -296]);
    case "WV":
      return new DOMMatrix([4.54, 0, 0, 4.54, -3010, -768]);
    case "WY":
      return new DOMMatrix([4.038, 0, 0, 4.038, -1038, -374]);
    default:
  }
}
