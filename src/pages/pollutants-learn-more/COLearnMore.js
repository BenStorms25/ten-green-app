import React from "react";
import CustomHeader from "../../components/CustomHeader";

function COLearnMore() {
  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Carbon Monoxide</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Carbon monoxide (CO) is a colorless, odorless gas that forms from
            the incomplete combustion of fossil fuels. Automobiles are a primary
            source of this pollutant, and high levels of CO are generally found
            in areas with heavy traffic congestion. Other sources of CO include
            metals processing, chemical manufacturing, residential wood burning,
            and forest fires. CO produced from natural sources is found in the
            atmosphere in only trace amounts. Information source: U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Carbon monoxide in sufficient concentration reduces oxygen delivery
            to body organs and tissues, which can lead to illness or death.
            Information source: U.S. EPA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default COLearnMore;
