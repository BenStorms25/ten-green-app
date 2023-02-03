import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

import AboutContent from "../components/AboutContent";
import "./styles/About.css";

function About() {
  useEffect(() => {
    document.title = "About - 10Green";
  }, []);

  return (
    <div className="about-page">
      <CustomHeader />

      <AboutContent />
    </div>
  );
}

export default About;
