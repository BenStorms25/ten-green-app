import React, { useState, useEffect } from "react";
import "./styles/PollutantsContent.css";
import co2Image from "../images/carbon-monoxide-oQEdDIMEIlc-unsplash-1440x1080.jpeg";
import noImage from "../images/nitric_oxide.png";
import ozoneImage from "../images/ozoneImage.png";
import sulfurDioxideImage from "../images/sulfurDioxide.png";
import nitrogenDioxideImage from "../images/nitrogenDioxideImage.png";
import nickelImage from "../images/nickelPollution.png";
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

  var acc;
  useEffect(() => {
    acc = document.getElementsByClassName("accordion");
    if (acc) {
      setMounted(true);
      if (mounted && !attached) {
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
        window.addEventListener("resize", (event) => {
          event.preventDefault();
          setWidthOfDescription(window.innerWidth * 0.7);
        });
        setAttached(true);
      }
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
            <button class="accordion">Learn More</button>
            <div
              class="panel"
              style={{ width: widthOfDescription, zIndex: 99 }}
            >
              <p>Carbon Monoxide [CO]</p>
            </div>
          </article>

          <article class="card">
            <img src={smallParticulateMatterImage}></img>
            <p>PM10</p>
            <a href="pollutants-and-standards/small-particulates">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={largeParticulateMatterImage}></img>
            <p>PM2.5</p>
            <a href="pollutants-and-standards/small-particulates">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={sulfurDioxideImage}></img>
            <p>SO2</p>
            <a href="pollutants-and-standards/so2">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={nitrogenDioxideImage}></img>
            <p>NO2</p>
            <a href="pollutants-and-standards/no2">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={noImage}></img>
            <p>NO</p>
            <a href="pollutants-and-standards/no">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={ozoneImage}></img>
            <p>Ozone</p>
            <a href="pollutants-and-standards/ozone">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={leadImage}></img>
            <p>Lead</p>
            <a href="pollutants-and-standards/lead">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={cadmiumImage}></img>
            <p>Cadmium</p>
            <a href="pollutants-and-standards/cadmium">
              <button>Learn More</button>
            </a>
          </article>

          <article class="card">
            <img src={arsenicImage}></img>
            <p>Arsenic</p>
            <a href="pollutants-and-standards/arsenic">
              <button>Learn More</button>
            </a>
          </article>
        </section>
      </div>

      <CustomFooter />
    </>
  );
}

export default PollutantsContent;
