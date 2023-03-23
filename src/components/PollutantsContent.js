import React, { useState, useEffect } from "react";
import "./styles/PollutantsContent.css";
import co2Image from "../images/carbon-monoxide-oQEdDIMEIlc-unsplash-1440x1080.jpeg";
import noImage from "../images/nitric_oxide.png";
import nickelImage from "../images/nickelPollution.png";
import ozoneImage from "../images/ozoneImage.png";
import sulfurDioxideImage from "../images/sulfurDioxide.png";
import nitrogenDioxideImage from "../images/nitrogenDioxideImage.png";
import leadImage from "../images/leadPollution.png";
import cadmiumImage from "../images/cadmiumImage.png";
import arsenicImage from "../images/arsenicImage.png";
import smallParticulateMatterImage from "../images/particulateMatterImage.png";
import largeParticulateMatterImage from "../images/largeparticles.png";
import CustomFooter from "./CustomFooter";
import PollutantsInfo from "./Interactive_map_comps/Content/PollutantsInfo.json";

//import pollutantsInfo from "./Interactive_map_comps/Content/PollutantsInfo.json";

function PollutantsContent() {
  const [mounted, setMounted] = useState(false);
  const [attached, setAttached] = useState(false);
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [currentPollutant, setCurrentPollutant] = useState("CO");
  const [pollutantJson, setPollutantJson] = useState({});
  const [widthOfDescription, setWidthOfDescription] = useState("70rem");

  const [maxCards, setMaxCards] = useState(calcCards());

  function calcCards() {
    if (window.innerWidth >= 1103) {
      return 5;
    } else if (window.innerWidth >= 893) {
      return 4;
    } else if (window.innerWidth >= 682) {
      return 3;
    } else if (window.innerWidth >= 400) {
      return 2;
    } else {
      return 1;
    }
  }

  let topPanels;
  let bottomPanels;
  useEffect(() => {
    //
    topPanels = document.getElementsByClassName("top-panel");
    bottomPanels = document.getElementsByClassName("bottom-panel");
    if (topPanels) {
      setMounted(true);
      if (mounted && !attached) {
        window.addEventListener("resize", (event) => {
          event.preventDefault();
          //setWidthOfDescription(cards.width);
          setMaxCards(calcCards());
        });
        setAttached(true);
      }
    }
  });

  function handleDisplayTop(pollutant) {
    setCurrentPollutant(pollutant);

    // turn off all panels before
    for (let i = 0; i < topPanels.length; i++) {
      topPanels[i].style.display = "none";
      bottomPanels[i].style.display = "none";
    }
    setDescriptionActive(false);

    // if learn more pressed again, collapse panel
    if (pollutant === currentPollutant && descriptionActive) {
      return;
    }
    // setter not working?  Always rendering CO in the panels
    console.log(currentPollutant);
    console.log(PollutantsInfo[currentPollutant].pollutant);
    if (topPanels[maxCards - 1].style.display === "block") {
      topPanels[maxCards - 1].style.display = "none";
    } else {
      topPanels[maxCards - 1].style.display = "block";
      setDescriptionActive(true);
    }
  }

  function handleDisplayBottom(pollutant) {
    setCurrentPollutant(pollutant);
    // turn off all panels
    for (let i = 0; i < topPanels.length; i++) {
      topPanels[i].style.display = "none";
      bottomPanels[i].style.display = "none";
    }
    setDescriptionActive(false);

    // if learn more pressed again, collapse panel
    if (pollutant === currentPollutant && descriptionActive) {
      return;
    }
    // setter not working?  Always rendering CO in the panels
    console.log(currentPollutant);
    console.log(PollutantsInfo[currentPollutant].pollutant);
    if (bottomPanels[maxCards - 1].style.display === "block") {
      bottomPanels[maxCards - 1].style.display = "none";
    } else {
      bottomPanels[maxCards - 1].style.display = "block";
      setDescriptionActive(true);
    }
  }

  return (
    <>
      <div className="center-content-1">
        <h1>Pollutants & Standards</h1>
        <section class="cards">
          <article class="card">
            <img src={co2Image}></img>
            <p>CO</p>
            <button onClick={() => handleDisplayTop("CO")}>Learn More</button>
          </article>

          <div class="top-panel">
            <p className="title">
              {PollutantsInfo[currentPollutant].pollutant}
            </p>
            <div className="description">
              <h2>Description</h2>
              <p>{PollutantsInfo[currentPollutant].description}</p>
              <h2>Health Implications</h2>
              <p>{PollutantsInfo[currentPollutant].implications}</p>
              <p>{PollutantsInfo[currentPollutant].source}</p>
            </div>
          </div>
          <article class="card">
            <img src={smallParticulateMatterImage}></img>
            <p>PM10</p>
            <button onClick={() => handleDisplayTop("PM10")}>Learn More</button>
          </article>
          <div class="top-panel">
            <p className="title">
              {PollutantsInfo[currentPollutant].pollutant}
            </p>
            <div className="description">
              <h2>Description</h2>
              <p>{PollutantsInfo[currentPollutant].description}</p>
              <h2>Health Implications</h2>
              <p>{PollutantsInfo[currentPollutant].implications}</p>
              <p>{PollutantsInfo[currentPollutant].source}</p>
            </div>
          </div>

          <article class="card">
            <img src={largeParticulateMatterImage}></img>
            <p>PM2.5</p>
            <button onClick={() => handleDisplayTop("PM25")}>Learn More</button>
          </article>
          <div class="top-panel">
            <p className="title">
              {PollutantsInfo[currentPollutant].pollutant}
            </p>
            <div className="description">
              <h2>Description</h2>
              <p>{PollutantsInfo[currentPollutant].description}</p>
              <h2>Health Implications</h2>
              <p>{PollutantsInfo[currentPollutant].implications}</p>
              <p>{PollutantsInfo[currentPollutant].source}</p>
            </div>
          </div>

          <article class="card">
            <img src={sulfurDioxideImage}></img>
            <p>SO2</p>
            <button onClick={() => handleDisplayTop("SO2")}>Learn More</button>
          </article>
          <div class="top-panel">
            <p className="title">
              {PollutantsInfo[currentPollutant].pollutant}
            </p>
            <div className="description">
              <h2>Description</h2>
              <p>{PollutantsInfo[currentPollutant].description}</p>
              <h2>Health Implications</h2>
              <p>{PollutantsInfo[currentPollutant].implications}</p>
              <p>{PollutantsInfo[currentPollutant].source}</p>
            </div>
          </div>

          <article class="card">
            <img src={nitrogenDioxideImage}></img>
            <p>NO2</p>
            <button onClick={() => handleDisplayTop("NO2")}>Learn More</button>
          </article>
          <div class="top-panel">
            <p className="title">
              {PollutantsInfo[currentPollutant].pollutant}
            </p>
            <div className="description">
              <h2>Description</h2>
              <p>{PollutantsInfo[currentPollutant].description}</p>
              <h2>Health Implications</h2>
              <p>{PollutantsInfo[currentPollutant].implications}</p>
              <p>{PollutantsInfo[currentPollutant].source}</p>
            </div>
          </div>

          <article class="card">
            <img src={nickelImage}></img>
            <p>Nickel</p>
            <button onClick={() => handleDisplayBottom("Nickel")}>
              Learn More
            </button>
          </article>
          <div class="bottom-panel">
            <p>{PollutantsInfo[currentPollutant].pollutant}</p>
            <p>{PollutantsInfo[currentPollutant].description}</p>
            <p>{PollutantsInfo[currentPollutant].implications}</p>
            <p>{PollutantsInfo[currentPollutant].source}</p>
          </div>

          <article class="card">
            <img src={ozoneImage}></img>
            <p>Ozone</p>
            <button onClick={() => handleDisplayBottom("Ozone")}>
              Learn More
            </button>
          </article>
          <div class="bottom-panel">
            <p>{PollutantsInfo[currentPollutant].pollutant}</p>
            <p>{PollutantsInfo[currentPollutant].description}</p>
            <p>{PollutantsInfo[currentPollutant].implications}</p>
            <p>{PollutantsInfo[currentPollutant].source}</p>
          </div>

          <article class="card">
            <img src={leadImage}></img>
            <p>Lead</p>
            <button onClick={() => handleDisplayBottom("Lead")}>
              Learn More
            </button>
          </article>
          <div class="bottom-panel">
            <p>{PollutantsInfo[currentPollutant].pollutant}</p>
            <p>{PollutantsInfo[currentPollutant].description}</p>
            <p>{PollutantsInfo[currentPollutant].implications}</p>
            <p>{PollutantsInfo[currentPollutant].source}</p>
          </div>

          <article class="card">
            <img src={cadmiumImage}></img>
            <p>Cadmium</p>
            <button onClick={() => handleDisplayBottom("Cadmium")}>
              Learn More
            </button>
          </article>
          <div class="bottom-panel">
            <p>{PollutantsInfo[currentPollutant].pollutant}</p>
            <p>{PollutantsInfo[currentPollutant].description}</p>
            <p>{PollutantsInfo[currentPollutant].implications}</p>
            <p>{PollutantsInfo[currentPollutant].source}</p>
          </div>
          <article class="card">
            <img src={arsenicImage}></img>
            <p>Arsenic</p>
            <button onClick={() => handleDisplayBottom("Arsenic")}>
              Learn More
            </button>
          </article>
          <div class="bottom-panel">
            <p>{PollutantsInfo[currentPollutant].pollutant}</p>
            <p>{PollutantsInfo[currentPollutant].description}</p>
            <p>{PollutantsInfo[currentPollutant].implications}</p>
            <p>{PollutantsInfo[currentPollutant].source}</p>
          </div>
        </section>
      </div>

      <CustomFooter />
    </>
  );
}

export default PollutantsContent;
