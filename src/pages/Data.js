import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

function Data() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Data - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader location={location} />
    </div>
  );
}

export default Data;
