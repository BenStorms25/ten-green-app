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

export let Data_Formatter = (measure) => {


    switch (measure) {
        case "10green": 
            return (green10);
            case "aqi": 
            return (aqi);
            case "arsenic": 
            return (arsenic);
            case "cadmium": 
            return (cadmium);
            case "co": 
            return (co);
            case "lead": 
            return (lead);
            case "nickel": 
            return (nickel);
            case "no2": 
            return (no2);
            case "ozone": 
            return (ozone);
            case "pm10": 
            return (pm10);
            case "pm25": 
            return (pm25);
            case "so2": 
            return (so2);
            

    }
    
}