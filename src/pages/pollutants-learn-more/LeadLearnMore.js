import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";

function LeadLearnMore() {
  useEffect(() => {
    document.title = "Lead - 10Green";
  }, []);

  return (
    <div className="entire-page">
      <CustomHeader />
      <div className="center-content">
        <h1>Lead</h1>
        <div className="descriptionAndImplications">
          <h2>Description</h2>
          <p>
            Lead (Pb) is a metal toxin that can damage organs and tissues in
            humans and animals. In the past Romans used lead-made pipes for
            water transport infrastructure in ancient cities. In modern times,
            prior to the 1980s when its health hazards became widely known, lead
            was used in paints, and as an additive in gasoline. Today, although
            regulated by government agencies, lead continues to be a pollution
            concern, as it is injected into the atmosphere by smelters, metal
            processing plants, and incinerators. Information source: U.S. EPA.
          </p>
          <h2>Health Implications</h2>
          <p>
            Lead is distributed throughout the body in blood and accumulates in
            bone. Depending on the level of exposure, lead can adversely affect
            several systems in the body including nervous, immune, reproductive,
            developmental, and cardiovascular. Lead can also impair kidney
            function, and reduce the oxygen carrying capacity of blood. Infants
            and young children are especially sensitive to lead poisoning, the
            latter which may underpin behavioral problems, learning
            disabilities, and low IQ. Information source: U.S. EPA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeadLearnMore;
