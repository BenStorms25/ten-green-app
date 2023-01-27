import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import CustomFooter from "../../components/CustomFooter";

function ArsenicLearnMore() {
  useEffect(() => {
    document.title = "Arsenic - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Arsenic</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Arsenic (As) is a toxic natural element that is found in some rock
            and soil types, and also as a byproduct to human-made pesticides and
            wood preservatives. Humans most commonly come into contact with
            arsenic through contaminated groundwater. Information source: the
            World Health Organization.
          </p>
          <h2>Health Implications</h2>
          <p>
            Soluble inorganic arsenic is very toxic. Intake of this pollutant
            over time can lead to chronic arsenic poisoning (arsenicosis).
            Effects, which can take years to develop, include skin lesions,
            peripheral neuropathy, gastrointestinal illness, diabetes, renal
            system effects, cardiovascular disease, and cancer. Information
            source: the World Health Organization.
          </p>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default ArsenicLearnMore;
