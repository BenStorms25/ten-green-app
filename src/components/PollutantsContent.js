import React, { useState, useEffect } from "react";
import "./styles/PollutantsContent.css";
import co2Image from "../images/carbon-monoxide-oQEdDIMEIlc-unsplash-1440x1080.jpeg";
import noImage from "../images/nitric_oxide.png";
import ozoneImage from "../images/ozoneImage.png";
import sulfurDioxideImage from "../images/sulfurDioxide.png";
import nitrogenDioxideImage from "../images/nitrogenDioxideImage.png";
import leadImage from "../images/leadPollution.png";
import cadmiumImage from "../images/cadmiumImage.png";
import arsenicImage from "../images/arsenicImage.png";
import smallParticulateMatterImage from "../images/particulateMatterImage.png";
import largeParticulateMatterImage from "../images/largeparticles.png";
import CustomFooter from "./CustomFooter";

//import pollutantsInfo from "./Interactive_map_comps/Content/PollutantsInfo.json";

function PollutantsContent() {
  const [mounted, setMounted] = useState(false);
  const [attached, setAttached] = useState(false);
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [currentPollutant, setCurrentPollutant] = useState(null);
  const [pollutantJson, setPollutantJson] = useState({});
  const [widthOfDescription, setWidthOfDescription] = useState(
    window.innerWidth * 0.7
  );

  const [maxCards, setMaxCards] = useState(null);

  function calcCards() {
    if (widthOfDescription >= 1279) {
      setMaxCards(5);
    } else if (widthOfDescription >= 1035) {
      setMaxCards(4);
    } else if (widthOfDescription >= 792) {
      setMaxCards(3);
    } else if (widthOfDescription >= 548) {
      setMaxCards(2);
    } else {
      setMaxCards(1);
    }
  }

  const handleDisplayDescription = (pollutant) => {
    if (!mounted) {
      return;
    }
    if (!descriptionActive && allPanels) {
      allPanels[maxCards].style.display = "block";
    } else if (allPanels) {
      allPanels[maxCards].style.display = "none";
    }
  };

  let allPanels;

  useEffect(() => {
    //acc = document.getElementsByClassName("accordion");
    if (!mounted) {
      allPanels = document.getElementsByClassName("panel");
    }
    if (allPanels && !attached) {
      setMounted(true);
      window.addEventListener("resize", (event) => {
        event.preventDefault();
        setWidthOfDescription(window.innerWidth * 0.7);
        calcCards();
      });
      setAttached(true);
    }
  });

  return (
    <>
      <div className="center-content-1">
        <h1>Pollutants & Standards</h1>
        <section class="cards">
          <article class="card">
            <img src={co2Image}></img>
            <p>CO</p>
            <button onClick={handleDisplayDescription("CO")}>Learn More</button>
          </article>
          <div class="panel" style={{ width: widthOfDescription, zIndex: 99 }}>
            <p>something</p>
          </div>
          <article class="card">
            <img src={smallParticulateMatterImage}></img>
            <p>PM10</p>
            <button onClick={handleDisplayDescription("PM10")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel2"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={largeParticulateMatterImage}></img>
            <p>PM2.5</p>
            <button onClick={handleDisplayDescription("PM25")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel3"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={sulfurDioxideImage}></img>
            <p>SO2</p>
            <button onClick={handleDisplayDescription("SO2")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel4"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={nitrogenDioxideImage}></img>
            <p>NO2</p>
            <button onClick={handleDisplayDescription("NO2")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel5"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={noImage}></img>
            <p>NO</p>
            <button onClick={handleDisplayDescription("NO")}>Learn More</button>
          </article>
          <div
            class="panel"
            id="panel6"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={ozoneImage}></img>
            <p>Ozone</p>
            <button onClick={handleDisplayDescription("Ozone")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel7"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={leadImage}></img>
            <p>Lead</p>
            <button onClick={handleDisplayDescription("Lead")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel8"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={cadmiumImage}></img>
            <p>Cadmium</p>
            <button onClick={handleDisplayDescription("Cadmium")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel9"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>

          <article class="card">
            <img src={arsenicImage}></img>
            <p>Arsenic</p>
            <button onClick={handleDisplayDescription("Arsenic")}>
              Learn More
            </button>
          </article>
          <div
            class="panel"
            id="panel10"
            style={{ width: widthOfDescription, zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>
        </section>
      </div>

      <CustomFooter />
    </>
  );
}

export default PollutantsContent;
