export let ThresholdFinder = (measure) => {
    switch (measure) {
            case "arsenic": 
            return 6;
            case "cadmium": 
            return 5;
            case "co": 
            return 13;
            case "lead": 
            return 150;
            case "nickel": 
            return 20;
            case "no2": 
            return 100;
            case "ozone": 
            return 70;
            case "pm10": 
            return 20;
            case "pm25": 
            return 10;
            case "so2": 
            return 75;
    }
    
}