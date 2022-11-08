import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

function Standards() {
  useEffect(() => {
    document.title = "Standards - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader />
    </div>
  );
}

export default Standards;
