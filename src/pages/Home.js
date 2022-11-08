import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";
import HomeContent from "../components/HomeContent";

import "./styles/Home.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Home - 10Green";
  }, []);

  return (
    <div className="home-page">
      <CustomHeader location={location} />
      <HomeContent />
    </div>
  );
}

export default Home;
