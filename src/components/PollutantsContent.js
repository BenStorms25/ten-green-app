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

<<<<<<< HEAD
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
=======
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
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
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
=======
            <button onClick={handleDisplayDescription("CO")}>Learn More</button>
          </article>
          <div class="panel" style={{ width: widthOfDescription, zIndex: 99 }}>
            <p>something</p>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
          </div>
          <article class="card">
            <img src={smallParticulateMatterImage}></img>
            <p>PM10</p>
<<<<<<< HEAD
            <button onClick={() => handleDisplayDescription("PM10")}>
=======
            <button onClick={handleDisplayDescription("PM10")}>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <button onClick={() => handleDisplayDescription("PM25")}>
=======
            <button onClick={handleDisplayDescription("PM25")}>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/so2">
              <button onClick={() => handleDisplayDescription("SO2")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("SO2")}>
              Learn More
            </button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/no2">
              <button onClick={() => handleDisplayDescription("NO2")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("NO2")}>
              Learn More
            </button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/no">
              <button onClick={() => handleDisplayDescription("NO")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("NO")}>Learn More</button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/ozone">
              <button onClick={() => handleDisplayDescription("Ozone")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("Ozone")}>
              Learn More
            </button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/lead">
              <button onClick={() => handleDisplayDescription("Lead")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("Lead")}>
              Learn More
            </button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/cadmium">
              <button onClick={() => handleDisplayDescription("Cadmium")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("Cadmium")}>
              Learn More
            </button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
<<<<<<< HEAD
            <a href="pollutants-and-standards/arsenic">
              <button onClick={() => handleDisplayDescription("Arsenic")}>
                Learn More
              </button>
            </a>
=======
            <button onClick={handleDisplayDescription("Arsenic")}>
              Learn More
            </button>
>>>>>>> b4018f4a0fba287bb6382e44f8236db5088c3905
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
