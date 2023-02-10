import React, { useEffect, useState } from "react";

import green10 from "../content/data_files2/10green.json"
import aqi from "../content/data_files2/aqi.json"
import arsenic from "../content/data_files2/arsenic.json"
import cadmium from "../content/data_files2/cadmium.json"
import co from "../content/data_files2/co.json"
import lead from "../content/data_files2/lead.json"
import nickel from "../content/data_files2/nickel.json"
import no from "../content/data_files2/no.json"
import no2 from "../content/data_files2/no2.json"
import ozone from "../content/data_files2/ozone.json"
import pm10 from "../content/data_files2/pm10.json"
import pm25 from "../content/data_files2/pm25.json"
import so2 from "../content/data_files2/so2.json"
import allData from "../content/data_files2/allData.json"


export let Data_Formatter2 = (measure) => {


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