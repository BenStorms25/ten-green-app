import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

function About() {
  useEffect(() => {
    document.title = "About - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader />
    </div>
  );
}

export default About;
