import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import HomeContent from "../components/HomeContent";
import "./styles/Home.css";

function Home() {
  useEffect(() => {
    document.title = "Home - 10Green";
  }, []);

  useEffect(() => {
    //transitionBackground();
  });

  // function transitionBackground() {
  //   const [red, green, blue] = [33, 56, 50];
  //   const page = document.querySelector(".home-page");

  //   window.addEventListener("scroll", () => {
  //     const y = 1 + (window.scrollY || window.pageYOffset) / 50;
  //     let [r, g, b] = [red * y, green * y, blue * y].map(Math.round);
  //     if (r > 255 || g > 255 || b > 243) {
  //       r = 255;
  //       g = 255;
  //       b = 243;
  //     }

  //     page.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  //   });
  // }

  return (
    <div className="home-page">
      <CustomHeader />
      <HomeContent />
    </div>
  );
}

export default Home;
