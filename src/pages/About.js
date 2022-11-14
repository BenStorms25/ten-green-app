import React, { useState, useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import AboutContent from "../components/AboutContent";
import "./styles/About.css";
import Glide from "@glidejs/glide";
import Images from "@glidejs/glide/dist/glide.modular.esm"
var glide = new Glide('.glide')

glide.mount()
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