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

function PollutantsContent() {
  const [mounted, setMounted] = useState(false);
  const [attached, setAttached] = useState(false);
  const [widthOfDescription, setWidthOfDescription] = useState(
    window.innerWidth * 0.7
  );
  const [maxCards, setMaxCards] = useState(null);

  function calcCards() {
    if (window.innerWidth >= 1103) {
      setMaxCards(5);
    } else if (window.innerWidth >= 893) {
      setMaxCards(4);
    } else if (window.innerWidth >= 682) {
      setMaxCards(3);
    } else if (window.innerWidth >= 400) {
      // wont let me shrink broswer to just one card, dont actually know width for it.
      setMaxCards(2);
    } else {
      setMaxCards(1);
    }
  }

  var acc;
  let panels;
  useEffect(() => {
    // on runtime, grab the accordion class
    panels = document.getElementsByClassName("panel");
    if (panels) {
      setMounted(true);
      if (mounted && !attached) {
        window.addEventListener("resize", (event) => {
          event.preventDefault();
          //setWidthOfDescription(cards.width);
          calcCards();
        });
        setAttached(true);
      }
    }
  });

  function handleDisplayDescription() {
    // should assign the correct pollutant json, then should display the correct panel based on
  }

  return (
    <>
      <div className="center-content-1">
        <h1>Pollutants & Standards</h1>
        <section class="cards">
          <article class="card">
            <img src={co2Image}></img>
            <p>CO</p>
            <button onClick={() => handleDisplayDescription("CO")}>
              Learn More
            </button>
          </article>

          <div
            class="panel"
            id="panel1"
            style={{ width: "70rem", maxWidth: "100%", zIndex: 99 }}
          >
            <p>Carbon Monoxide [CO]</p>
          </div>
          <article class="card">
            <img src={smallParticulateMatterImage}></img>
            <p>PM10</p>
            <button onClick={() => handleDisplayDescription("PM10")}>
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
            <button onClick={() => handleDisplayDescription("PM25")}>
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
            <a href="pollutants-and-standards/so2">
              <button onClick={() => handleDisplayDescription("SO2")}>
                Learn More
              </button>
            </a>
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
            <a href="pollutants-and-standards/no2">
              <button onClick={() => handleDisplayDescription("NO2")}>
                Learn More
              </button>
            </a>
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
            <a href="pollutants-and-standards/no">
              <button onClick={() => handleDisplayDescription("NO")}>
                Learn More
              </button>
            </a>
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
            <a href="pollutants-and-standards/ozone">
              <button onClick={() => handleDisplayDescription("Ozone")}>
                Learn More
              </button>
            </a>
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
            <a href="pollutants-and-standards/lead">
              <button onClick={() => handleDisplayDescription("Lead")}>
                Learn More
              </button>
            </a>
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
            <a href="pollutants-and-standards/cadmium">
              <button onClick={() => handleDisplayDescription("Cadmium")}>
                Learn More
              </button>
            </a>
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
            <a href="pollutants-and-standards/arsenic">
              <button onClick={() => handleDisplayDescription("Arsenic")}>
                Learn More
              </button>
            </a>
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
