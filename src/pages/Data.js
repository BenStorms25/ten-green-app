import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

function Data() {
  useEffect(() => {
    document.title = "Data - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader />
    </div>
  );
}

export default Data;
