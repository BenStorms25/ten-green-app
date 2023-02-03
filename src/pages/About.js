import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
<<<<<<< HEAD
import { GraphWidget } from "../components/GraphWidget";
=======
import AboutContent from "../components/AboutContent";
>>>>>>> b39510323f62bbc7b054ba6d0a51ada434cb79ed
import "./styles/About.css";

function About() {
  useEffect(() => {
    document.title = "About - 10Green";
  }, []);

  return (
    <div className="about-page">
      <CustomHeader />
<<<<<<< HEAD
      <GraphWidget />

=======
      <AboutContent />
>>>>>>> b39510323f62bbc7b054ba6d0a51ada434cb79ed
    </div>
  );
}

export default About;
