import React, { useEffect, useState } from "react";

import green10 from "../content/data_files/10green.json"
import aqi from "../content/data_files/aqi.json"
import arsenic from "../content/data_files/arsenic.json"
import cadmium from "../content/data_files/cadmium.json"
import co from "../content/data_files/co.json"
import lead from "../content/data_files/lead.json"
import nickel from "../content/data_files/nickel.json"
import no from "../content/data_files/no.json"
import no2 from "../content/data_files/no2.json"
import ozone from "../content/data_files/ozone.json"
import pm10 from "../content/data_files/pm10.json"
import pm25 from "../content/data_files/pm25.json"
import so2 from "../content/data_files/so2.json"
import allData from "../content/data_files/allData.json"


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
            case "no": 
            return (no);
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