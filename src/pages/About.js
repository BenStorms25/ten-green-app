import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

function About() {
  const location = useLocation();

  useEffect(() => {
    document.title = "About - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader location={location} />
    </div>
  );
}

export default About;
