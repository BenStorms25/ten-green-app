import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import HomeContent from "../components/HomeContent";

import "./styles/Home.css";

function Home() {
  useEffect(() => {
    document.title = "Home - 10Green";
  }, []);

  return (
    <div className="home-page">
      <CustomHeader />
      <HomeContent />
    </div>
  );
}

export default Home;
