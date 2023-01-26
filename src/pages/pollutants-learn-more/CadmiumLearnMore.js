import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";

function CadmiumLearnMore() {
  useEffect(() => {
    document.title = "Cadmium - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Cadmium</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Cadmium (Cd), a naturally occurring element, is a carcinogen
            introduced to the atmosphere primarily from human and industrial
            activity. These activities include mining, smelting and refining of
            non-ferrous metals, fossil fuel combustion, waste incineration, and
            the manufacture of phosphate fertilizers and batteries. Cadmium can
            also be present in tobacco products. Trace amounts of cadmium are
            generated in nature from volcanic activity and surface weathering
            and erosion. Information source: the World Health Organization.
          </p>
          <h2>Health Implications</h2>
          <p>
            Cadmium can reduce kidney function, and have adverse impacts on the
            skeletal and the respiratory systems. Information source: the World
            Health Organization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CadmiumLearnMore;
