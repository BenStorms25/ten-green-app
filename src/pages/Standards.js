import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

function Standards() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Standards - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader location={location} />
    </div>
  );
}

export default Standards;
