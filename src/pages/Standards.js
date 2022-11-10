import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import "./styles/Standards.css";

function Standards() {
  useEffect(() => {
    document.title = "Standards - 10Green";
  }, []);

  return (
    <div className="standards-page">
      <CustomHeader />
    </div>
  );
}

export default Standards;
