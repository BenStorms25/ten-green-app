import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

function Pollutants() {
  useEffect(() => {
    document.title = "Pollutants - 10Green";
  }, []);
  return (
    <div>
      <CustomHeader />
    </div>
  );
}

export default Pollutants;
