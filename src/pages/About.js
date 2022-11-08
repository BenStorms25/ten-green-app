import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "10Green - About";
  }, []);

  return <div></div>;
}

export default About;
