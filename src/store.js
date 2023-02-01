import { createStore } from "redux";

const initialState = {
  county: "Select a County",
  id: "",
  year: 1980,
  tenGreenScore: 0,
  aqi: 0,
  arsenic: 0,
  cadmium: 0,
  co: 0,
  lead: 0,
  nickel: 0,
  no: 0,
  no2: 0,
  ozone: 0,
  pm10: 0,
  pm25: 0,
  so2: 0,
  panX: 40,
  panY: 65,
  zoom: 1.2,
  transform0: 1,
  transform1: 0,
  transform2: 0,
  transform3: 1,
  transform4: 0,
  transform5: 0,
};

function reducer(state = initialState, action) {
  if (action.type === "SET_COUNTY_NAME") {
    return {
      ...state,
      county: action.payload,
    };
  }
  if (action.type === "SET_ID") {
    return {
      ...state,
      id: action.payload,
    };
  }
  if (action.type === "SET_TEN_GREEN_SCORE") {
    return {
      ...state,
      tenGreenScore: action.payload,
    };
  }
  if (action.type === "SET_AQI") {
    return {
      ...state,
      aqi: action.payload,
    };
  }
  if (action.type === "SET_ARSENIC") {
    return {
      ...state,
      arsenic: action.payload,
    };
  }
  if (action.type === "SET_CADMIUM") {
    return {
      ...state,
      cadmium: action.payload,
    };
  }
  if (action.type === "SET_CO") {
    return {
      ...state,
      co: action.payload,
    };
  }
  if (action.type === "SET_LEAD") {
    return {
      ...state,
      lead: action.payload,
    };
  }
  if (action.type === "SET_NICKEL") {
    return {
      ...state,
      nickel: action.payload,
    };
  }
  if (action.type === "SET_NO") {
    return {
      ...state,
      no: action.payload,
    };
  }
  if (action.type === "SET_NO2") {
    return {
      ...state,
      no2: action.payload,
    };
  }
  if (action.type === "SET_OZONE") {
    return {
      ...state,
      ozone: action.payload,
    };
  }
  if (action.type === "SET_PM10") {
    return {
      ...state,
      pm10: action.payload,
    };
  }
  if (action.type === "SET_PM25") {
    return {
      ...state,
      pm25: action.payload,
    };
  }
  if (action.type === "SET_SO2") {
    return {
      ...state,
      so2: action.payload,
    };
  }
  if (action.type === "SET_PAN_X") {
    return {
      ...state,
      panX: action.payload,
    };
  }
  if (action.type === "SET_PAN_Y") {
    return {
      ...state,
      panY: action.payload,
    };
  }
  if (action.type === "SET_ZOOM") {
    return {
      ...state,
      zoom: action.payload,
    };
  }
  if (action.type === "SET_TRANSFORM_0") {
    return {
      ...state,
      transform0: action.payload,
    };
  }
  if (action.type === "SET_TRANSFORM_1") {
    return {
      ...state,
      transform1: action.payload,
    };
  }

  if (action.type === "SET_TRANSFORM_2") {
    return {
      ...state,
      transform2: action.payload,
    };
  }

  if (action.type === "SET_TRANSFORM_3") {
    return {
      ...state,
      transform3: action.payload,
    };
  }

  if (action.type === "SET_TRANSFORM_4") {
    return {
      ...state,
      transform4: action.payload,
    };
  }

  if (action.type === "SET_TRANSFORM_5") {
    return {
      ...state,
      transform5: action.payload,
    };
  }

  return state;
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
