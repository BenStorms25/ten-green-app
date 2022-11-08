import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

function Pollutants() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Pollutants - 10Green";
  }, []);
  return (
    <div>
      <CustomHeader location={location} />
    </div>
  );
}

export default Pollutants;
