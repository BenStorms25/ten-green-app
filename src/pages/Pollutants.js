import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import PollutantsContent from "../components/PollutantsContent";
import "./styles/Pollutants.css";

function Pollutants() {
  useEffect(() => {
    document.title = "Pollutants - 10Green";
  }, []);
  return (
    <div className="pollutants-page">
      <CustomHeader />
      <PollutantsContent />
    </div>
  );
}

export default Pollutants;
