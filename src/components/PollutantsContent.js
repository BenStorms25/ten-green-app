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
    if (window.innerWidth >= 1086) {
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
  let panels;
  useEffect(() => {
    //
    topPanels = document.getElementsByClassName("top-panel");
    bottomPanels = document.getElementsByClassName("bottom-panel");
    panels = document.getElementsByClassName("panel");
    if (topPanels || panels) {
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
    let numOfCards;

    if (window.innerWidth >= 1086) {
      numOfCards = 5;
    } else if (window.innerWidth >= 893) {
      numOfCards = 4;
    } else if (window.innerWidth >= 682) {
      numOfCards = 3;
    } else if (window.innerWidth >= 400) {
      numOfCards = 2;
    } else {
      numOfCards = 1;
    }

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

    if (topPanels[numOfCards - 1].style.display === "block") {
      topPanels[numOfCards - 1].style.display = "none";
    } else {
      topPanels[numOfCards - 1].style.display = "block";
      setDescriptionActive(true);
    }
  }

  function handleDisplayBottom(pollutant) {
    let numOfCards;

    if (window.innerWidth >= 1086) {
      numOfCards = 5;
    } else if (window.innerWidth >= 893) {
      numOfCards = 4;
    } else if (window.innerWidth >= 682) {
      numOfCards = 3;
    } else if (window.innerWidth >= 400) {
      numOfCards = 2;
    } else {
      numOfCards = 1;
    }

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

    if (bottomPanels[numOfCards - 1].style.display === "block") {
      bottomPanels[numOfCards - 1].style.display = "none";
    } else {
      bottomPanels[numOfCards - 1].style.display = "block";
      setDescriptionActive(true);
    }
  }

  function handleDisplayPanel(pollutant, index) {
    let numOfCards;

    if (window.innerWidth >= 1086) {
      numOfCards = 5;
    } else if (window.innerWidth >= 893) {
      numOfCards = 4;
    } else if (window.innerWidth >= 682) {
      numOfCards = 3;
    } else if (window.innerWidth >= 400) {
      numOfCards = 2;
    } else {
      numOfCards = 1;
    }

    setCurrentPollutant(pollutant);

    // turn them all off initially
    for (let i = 0; i < panels.length; i++) {
      panels[i].style.display = "none";
    }
    setDescriptionActive(false);

    if (pollutant === currentPollutant && descriptionActive) {
      return;
    }

    if (numOfCards === 4 && index > 8) {
      numOfCards = 10;
    } else if (numOfCards === 3 && index > 3 && index <= 6) {
      numOfCards = 6;
    } else if (numOfCards === 3 && index > 6 && index < 10) {
      numOfCards = 9;
    } else if (numOfCards === 3 && index === 10) {
      numOfCards = 10;
    } else if (numOfCards === 2 && index > 2 && index <= 4) {
      numOfCards = 4;
    } else if (numOfCards === 2 && index > 4 && index <= 6) {
      numOfCards = 6;
    } else if (numOfCards === 2 && index > 6 && index <= 8) {
      numOfCards = 8;
    } else if (numOfCards === 2 && index > 8) {
      numOfCards = 10;
    } else if (numOfCards === 1) {
      numOfCards = index;
    } else if (index > numOfCards) {
      numOfCards *= 2;
    }

    // if already on, turn off, if not, turn on
    if (panels[numOfCards - 1].style.display === "block") {
      panels[numOfCards - 1].style.display = "none";
    } else {
      panels[numOfCards - 1].style.display = "block";
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
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayTop("CO")
                  : () => handleDisplayPanel("CO", 1)
              }
            >
              Learn More
            </button>
          </article>
          <div
            class={window.innerWidth > 1086 ? "top-panel" : "panel"}
            style={{
              width: window.innerWidth > 1086 ? "70rem" : "95%",
              maxWidth: "100%",
              zIndex: 99,
            }}
          >
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
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayTop("PM10")
                  : () => handleDisplayPanel("PM10", 2)
              }
            >
              Learn More
            </button>
          </article>
          <div
            class={window.innerWidth > 1086 ? "top-panel" : "panel"}
            style={{
              width: window.innerWidth > 1086 ? "70rem" : "95%",
              maxWidth: "100%",
              zIndex: 99,
            }}
          >
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
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayTop("PM25")
                  : () => handleDisplayPanel("PM25", 3)
              }
            >
              Learn More
            </button>
          </article>
          <div
            class={window.innerWidth > 1086 ? "top-panel" : "panel"}
            style={{
              width: window.innerWidth > 1086 ? "70rem" : "95%",
              maxWidth: "100%",
              zIndex: 99,
            }}
          >
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
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayTop("SO2")
                  : () => handleDisplayPanel("SO2", 4)
              }
            >
              Learn More
            </button>
          </article>
          <div
            class={window.innerWidth > 1086 ? "top-panel" : "panel"}
            style={{
              width: window.innerWidth > 1086 ? "70rem" : "95%",
              maxWidth: "100%",
              zIndex: 99,
            }}
          >
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
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayTop("NO2")
                  : () => handleDisplayPanel("NO2", 5)
              }
            >
              Learn More
            </button>
          </article>
          <div
            class={window.innerWidth > 1086 ? "top-panel" : "panel"}
            style={{
              width: window.innerWidth > 1086 ? "70rem" : "95%",
              maxWidth: "100%",
              zIndex: 99,
            }}
          >
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
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayBottom("Nickel")
                  : () => handleDisplayPanel("Nickel", 6)
              }
            >
              Learn More
            </button>
          </article>
          {window.innerWidth > 1086 ? (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          ) : null}

          {window.innerWidth > 1086 ? null : (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          )}
          <article class="card">
            <img src={ozoneImage}></img>
            <p>Ozone</p>
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayBottom("Ozone")
                  : () => handleDisplayPanel("Ozone", 7)
              }
            >
              Learn More
            </button>
          </article>
          {window.innerWidth > 1086 ? null : (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          )}
          {window.innerWidth > 1086 ? (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          ) : null}

          <article class="card">
            <img src={leadImage}></img>
            <p>Lead</p>
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayBottom("Lead")
                  : () => handleDisplayPanel("Lead", 8)
              }
            >
              Learn More
            </button>
          </article>
          {window.innerWidth > 1086 ? null : (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          )}
          {window.innerWidth > 1086 ? (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          ) : null}
          <article class="card">
            <img src={cadmiumImage}></img>
            <p>Cadmium</p>
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayBottom("Cadmium")
                  : () => handleDisplayPanel("Cadmium", 9)
              }
            >
              Learn More
            </button>
          </article>
          {window.innerWidth > 1086 ? null : (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          )}
          {window.innerWidth > 1086 ? (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          ) : null}
          <article class="card">
            <img src={arsenicImage}></img>
            <p>Arsenic</p>
            <button
              onClick={
                window.innerWidth > 1086
                  ? () => handleDisplayBottom("Arsenic")
                  : () => handleDisplayPanel("Arsenic", 10)
              }
            >
              Learn More
            </button>
          </article>
          {window.innerWidth > 1086 ? (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          ) : null}
          {window.innerWidth > 1086 ? null : (
            <div
              class={window.innerWidth > 1086 ? "bottom-panel" : "panel"}
              style={{
                width: window.innerWidth > 1086 ? "70rem" : "95%",
                maxWidth: "100%",
                zIndex: 99,
              }}
            >
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
          )}
        </section>
      </div>

      <CustomFooter />
    </>
  );
}

export default PollutantsContent;
