import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";

function NO2LearnMore() {
  useEffect(() => {
    document.title = "NO2 - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Nitrogen Dioxide</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Nitrogen dioxide (NO2) is a gas with poignant odor released during
            the burning of oil, wood, and coal-based fuels. The gas can be toxic
            to most living organisms, and it is a key agent in the development
            of acid rain and associated ecological damage. In moderate and high
            concentrations NO2 can render the horizon with a reddish-brown
            atmospheric haze. Information source: U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Short-term exposure to NO2 of less than one day can cause
            bronchioconstriction and increased asthma symptoms. Long-term health
            effects are unknown. Note that NO2 (and other gaseous nitrogen
            oxides) can react with ammonia and water molecules in the atmosphere
            forming small particulates, which have additional adverse health
            effects. Information source: U.S. EPA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NO2LearnMore;
