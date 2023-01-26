import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";

function NickelLearnMore() {
  useEffect(() => {
    document.title = "Nickel - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Nickel</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Nickel (Ni) is used primarily in the production of stainless steel
            and nickel alloys. It is also found in some natural settings. Human
            exposure comes from food, drinking water, and smoking. Information
            source: the World Health Organization.
          </p>
          <h2>Health Implications</h2>
          <p>
            Nickel is believed to be carcinogenic, but the only certain effect
            is a contact allergy in which skin becomes itchy and reddened.
            Information source: the World Health Organization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NickelLearnMore;
