import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import { GraphWidget } from "../components/GraphWidget";
import "./styles/About.css";

function About() {
  useEffect(() => {
    document.title = "About - 10Green";
  }, []);

  return (
    <div className="about-page">
      
      <CustomHeader />
      <GraphWidget />

    </div>
  );
}

export default About;
