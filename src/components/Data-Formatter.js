import green10 from "../content/json_choropleth/10green_1980-2021.json";
import aqi from "../content/json_choropleth/aqi_median_1980-2021.json";
import arsenic from "../content/json_choropleth/arsenic_1980-2021.json";
import cadmium from "../content/json_choropleth/cadmium_1980-2021.json";
import co from "../content/json_choropleth/co_1980-2021.json";
import lead from "../content/json_choropleth/lead_1980-2021.json";
import nickel from "../content/json_choropleth/nickel_1980-2021.json";
import no2 from "../content/json_choropleth/no2_1980-2021.json";
import ozone from "../content/json_choropleth/ozone_1980-2021.json";
import pm10 from "../content/json_choropleth/pm10_1980-2021.json";
import pm25 from "../content/json_choropleth/pm25_1980-2021.json";
import so2 from "../content/json_choropleth/so2_1980-2021.json";
import axios from "axios";

export let Data_Formatter = (measure) => {
  // declare the variables that will store data for each pollutant
  let green10Data;
  let aqiData;
  let arsenicData;
  let cadmiumData;
  let coData;
  let leadData;
  let nickelData;
  let no2Data;
  let ozoneData;
  let pm10Data;
  let pm25Data;
  let so2Data;

  // go and get all data from locations
  function getData() {
    axios
      .get("http://204.197.4.170/10green/json/10green_1980-2021.json")
      .then((response) => {
        console.log(response);
        return response.data;
      });
    // const aqiResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const arsenicResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const cadmiumResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const coResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const leadResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const nickelResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const no2Response = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const ozoneResponse = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const pm10Response = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const pm25Response = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );
    // const so2Response = await axios.get(
    //   "http://204.197.4.170/10green/json/10green_1980-2021.json"
    // );

    // assign response data to appropriate var

    // aqiData = aqiResponse.data;
    // arsenicData = arsenicResponse.data;
    // cadmiumData = cadmiumResponse.data;
    // coData = coResponse.data;
    // leadData = leadResponse.data;
    // nickelData = nickelResponse.data;
    // no2Data = no2Response.data;
    // ozoneData = ozoneResponse.data;
    // pm10Data = pm10Response.data;
    // pm25Data = pm25Response.data;
    // so2Data = so2Response.data;
    switch (measure) {
      case "10green":
        return green10Data;
      case "aqi":
        return aqiData;
      case "arsenic":
        return arsenicData;
      case "cadmium":
        return cadmiumData;
      case "co":
        return coData;
      case "lead":
        return leadData;
      case "nickel":
        return nickelData;
      case "no2":
        return no2Data;
      case "ozone":
        return ozoneData;
      case "pm10":
        return pm10Data;
      case "pm25":
        return pm25Data;
      case "so2":
        return so2Data;
      default:
        return;
    }
  }

  return getData();
};
