import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import "./styles/PollutantLearnMore.css";

function SO2LearnMore() {
  useEffect(() => {
    document.title = "SO2 - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Sulfur Dioxide</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Sulfur dioxide (SO2) is a highly reactive gas common in air
            pollution. SO2 is emitted primarily from fossil fuel combustion at
            power plants and other industrial facilities. SO2 is also emitted
            from industrial processes such metal extraction from ore, and
            burning high-sulfur containing fuels by locomotives, and large
            ships. Information source: U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Short-term exposure to SO2 of less than one day can cause
            bronchioconstriction and increased asthma symptoms. Long-term health
            effects are unknown. Note that SO2 (and other gaseous sulfur oxides)
            can react with compounds in the atmosphere forming small
            particulates, which have additional adverse health effects.
            Information source: U.S. EPA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SO2LearnMore;
