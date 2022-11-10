import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import OzoneContent from "../components/OzoneContent";
import "./styles/Ozone.css";

function Ozone() {
  useEffect(() => {
    document.title = "Ozone - 10Green";
  }, []);

  return (
    <div className="ozone-page">
      <CustomHeader />
      <OzoneContent />
    </div>
  );
}

export default Ozone;
