import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

function Ozone() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Ozone - 10Green";
  }, []);

  return (
    <div>
      <CustomHeader location={location} />
    </div>
  );
}

export default Ozone;
