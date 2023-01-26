import React from "react";
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

function PollutantsContent() {
  return (
    <div className="center-content">
      <h1>Pollutants & Standards</h1>
      <div className="pollutant-cards">
        <div class="centered">
          <section class="cards">
            <article class="card">
              <img src={co2Image}></img>
              <p>Carbon Monoxide</p>
              <a href="pollutants-and-standards/co">
                <button>Learn More</button>
              </a>
            </article>

            <article class="card">
              <img src={noImage}></img>
              <p>Nitric Oxide</p>
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
              <img src={sulfurDioxideImage}></img>
              <p>Sulfur Dioxide</p>
              <a href="pollutants-and-standards/so2">
                <button>Learn More</button>
              </a>
            </article>

            <article class="card">
              <img src={nitrogenDioxideImage}></img>
              <p>Nitrogen Dioxide</p>
              <a href="pollutants-and-standards/no2">
                <button>Learn More</button>
              </a>
            </article>

            <article class="card">
              <img src={nickelImage}></img>
              <p>Nickel</p>
              <a href="pollutants-and-standards/nickel">
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

            <article class="card">
              <img src={smallParticulateMatterImage}></img>
              <p>Small Particulate Matter</p>
              <a href="pollutants-and-standards/small-particulates">
                <button>Learn More</button>
              </a>
            </article>

            <article class="card">
              <img src={largeParticulateMatterImage}></img>
              <p>Large Particulate Matter</p>
              <a href="pollutants-and-standards/large-particulates">
                <button>Learn More</button>
              </a>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PollutantsContent;
