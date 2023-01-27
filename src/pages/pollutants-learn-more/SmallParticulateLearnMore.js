import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import CustomFooter from "../../components/CustomFooter";

function SmallParticulateLearnMore() {
  useEffect(() => {
    document.title = "Small Particulate Matter - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Small Particulate Matter</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Small or fine particulates are less than 2.5 micrometers in
            diameter. Particulates of this type are found in smoke and haze.
            These particles can be emitted from natural sources such as forest
            fires, or they can form in chemical reactions in the air with gases
            emitted from automobiles, power plants, and other industrial
            sources. Particulate matter pollution can cause respiratory illness
            and impair atmospheric clearness. Information source: U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Small particulates contain microscopic solid or liquid droplets that
            can penetrate deep into lung tissue and are generally more harmful
            than large particulates. Health impacts include airway irritation,
            coughing, decreased lung function, aggravated asthma, and the
            development of chronic bronchitis. Information source: U.S. EPA.
          </p>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default SmallParticulateLearnMore;
