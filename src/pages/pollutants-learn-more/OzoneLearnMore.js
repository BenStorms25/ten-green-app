import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import CustomFooter from "../../components/CustomFooter";

function OzoneLearnMore() {
  useEffect(() => {
    document.title = "Ozone - 10Green";
  }, []);
  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Ozone</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Ground level ozone (O3) is the primary component of smog. It forms
            mainly during the summertime when chemicals from fossil fuel
            combustion, namely nitrogen oxides, carbon monoxide, and volatile
            organic compounds, react in the presence of sunlight. O3 pollution
            originating from urban and industrial centers can be carried
            hundreds of miles in the atmosphere and pollute areas that are
            otherwise pristine. It should be noted that ground level ozone is
            different from stratospheric (or upper-atmosphere) ozone, and that
            the latter does not have direct health impacts. Information source:
            U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Elevated concentrations of ground level ozone can damage lung tissue
            and cause respiratory illness. Common indicators of ozone exposure
            include coughing, wheezing, throat discomfort, and aggravated asthma
            symptoms. Information source: U.S. EPA.
          </p>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default OzoneLearnMore;
