import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import DataContent from "../components/DataContent";
import "./styles/About.css";

function About() {
  useEffect(() => {
    document.title = "About - 10Green";
  }, []);

  return (
    <div className="about-page">
      
      <CustomHeader />
      <DataContent />

    </div>
  );
}

export default About;
