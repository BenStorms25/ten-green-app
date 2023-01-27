import React from "react";
import CustomFooter from "./CustomFooter";
import "./styles/AboutContent.css";
import about10GreenImage from "../images/10greenabout.png";
import climateChangeImage from "../images/Windturbine.png";
import planeImage from "../images/plane.png";
import blankUser from "../images/blankUser.png";

function AboutContent() {
  return (
    <div className="entire-page-1">
      <div className="center-content-2">
        <h1>About</h1>
        <div className="description">
          <img src={about10GreenImage} className="tenGreenImage"></img>

          <div className="paragraph-div">
            <h1>10Green</h1>
            <p>
              10Green is an interactive tool that provides a comprehensive
              assessment of the health of your environment.10Green leverages
              decades of ice core research that has allowed us to understand how
              the chemistry of Earth’s atmosphere has changed as a consequence
              of human activities. For more details go to:
              http://climatechange.umaine.edu/icecores/. 10Green uses publicly
              available data from U.S. environmental monitoring programs. The 10
              air quality measures represent some of the most significant
              threats to human health.
            </p>

            <p>
              10Green uses the strictest health standards from those reported by
              the U.S. Environmental Protection Agency, European Commission,
              California Environmental Protection Agency, Health Canada, and the
              World Health Organization to assign a health score. Learn more
              about how 10Green scores are calculated, the health implications
              and how the health of the place you choose to investigate has
              changed over time, here. 10Green is a collaboration between the
              Climate Change Institute, the School of Computing and Information
              Sciences, and Garrand. Funding for 10Green has been provided in
              part by The Heinz Endowments, The University of Maine, The
              National Science Foundation, Garrand, and the UMaine Development
              Office.
            </p>
          </div>
        </div>
        <div className="description">
          <div className="image-div"></div>
          <div className="paragraph-div-2">
            <h1>Climate Change Institute</h1>
            <p>
              The CCI is an interdisciplinary research unit organized to conduct
              research and graduate education focused on variability of Earth’s
              climate, ecosystems, and other environmental systems, and on the
              interaction between humans and the natural world.10Green is an
              initiative motivated by our research findings that reveal why, how
              fast, how much, and where changes in physical and chemical climate
              have occurred; and the realization that significant differences in
              physical and chemical climate exist between the natural and modern
              world. For more information about the Climate Change Institute or
              ice core research: http://climatechange.umaine.edu/icecores/ or
              http://climatechange.umaine.edu/
            </p>
          </div>
          <img className="cciImage" src={climateChangeImage}></img>
        </div>
        <div className="description">
          <div className="image-div"></div>
          <img className="cciImage" src={planeImage}></img>
          <div className="paragraph-div-2">
            <h1>External Links</h1>
            <p>
              10Green uses publicly available data from U.S. environmental
              monitoring programs. The 10 air quality measures represent some of
              the most significant threats to human health. For more
              information, climate analysis, and 7-day forecast maps, visit the
              full Climate Reanalyzer site. For more information about the
              Climate Change Institute ice core research:
              http://climatechange.umaine.edu/icecores/ For more information
              about the Climate Change Institute:
              http://climatechange.umaine.edu/ 10Green is a collaboration
              between the Climate Change Institute, the School of Computing and
              Information Sciences, and Garrand. Funding for 10Green has been
              provided in part by The Heinz Endowments, The University of Maine,
              The National Science Foundation, Garrand, and the UMaine
              Development Office.
            </p>
          </div>
        </div>
        <h1 className="meet-the-team-header">Meet The Team</h1>
        <div className="team-cards">
          <div class="centered">
            <section class="cards-1">
              <article class="card-1">
                <img src={blankUser}></img>
                <div>
                  <p>Team Member</p>
                  <a href="pollutants-and-standards/co">
                    <button>Learn More</button>
                  </a>
                </div>
              </article>
              <article class="card-1">
                <img src={blankUser}></img>
                <div>
                  <p>Team Member</p>
                  <a href="pollutants-and-standards/co">
                    <button>Learn More</button>
                  </a>
                </div>
              </article>
              <article class="card-1">
                <img src={blankUser}></img>
                <div>
                  <p>Team Member</p>
                  <a href="pollutants-and-standards/co">
                    <button>Learn More</button>
                  </a>
                </div>
              </article>
              <article class="card-1">
                <img src={blankUser}></img>
                <div>
                  <p>Team Member</p>
                  <a href="pollutants-and-standards/co">
                    <button>Learn More</button>
                  </a>
                </div>
              </article>
              <article class="card-1">
                <img src={blankUser}></img>
                <div>
                  <p>Team Member</p>
                  <a href="pollutants-and-standards/co">
                    <button>Learn More</button>
                  </a>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default AboutContent;
