import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomNav from "../components/CustomNav";
import HomeContent from "../components/HomeContent";
import "./styles/Home.css";

function Home() {
  useEffect(() => {
    document.title = "10Green - Home";
  }, []);

  return (
    <div className="home-page">
      <CustomHeader />
      <HomeContent />
    </div>
  );
}

export default Home;
