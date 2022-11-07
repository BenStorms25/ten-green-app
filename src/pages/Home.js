import React from "react";
import CustomHeader from "../components/CustomHeader";
import CustomNav from "../components/CustomNav";
import HomeContent from "../components/HomeContent";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <CustomHeader />
      <HomeContent />
    </div>
  );
}

export default Home;
