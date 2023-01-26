import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";

function LargeParticulateLearnMore() {
  useEffect(() => {
    document.title = "Large Particulate Matter - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Large Particulate Matter</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Large or coarse particulates are between 10 and 2.5 micrometers in
            diameter. Particulates of this type are found commonly near dusty
            roadways and industrial areas. Particulate matter pollution can
            cause respiratory illness as well as impair atmospheric clearness.
            Information source: U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Large particulates, although generally less harmful than small
            particulates, can cause throat and airway irritation, coughing,
            decreased lung function, aggravated asthma, and the development of
            chronic bronchitis. Information source: U.S. EPA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LargeParticulateLearnMore;
