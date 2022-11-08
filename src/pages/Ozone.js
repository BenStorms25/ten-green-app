import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";

function Ozone() {
  useEffect(() => {
    document.title = "Ozone - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader />
    </div>
  );
}

export default Ozone;
