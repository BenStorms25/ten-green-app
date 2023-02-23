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
          <h2>What is a 10Green Score?</h2>
          <p>
          The 10Green Score indicates the health of your environment using a number from 0 to 10.
          The higher the score, the healthier your environment.
          Factors that can reduce your score include unhealthy air quality readings and poor environmental monitoring.
          </p>
          <h2>10Green</h2>
          <p>
          10Green is an interactive tool that provides a comprehensive assessment of the current and historical air quality of your county.
          We utilize publicly available data from U.S. environmental monitoring programs to calculate the score, using standards set by:
          the U.S. Environmental Protection Agency, European Commission, California Environmental Protection Agency, Health Canada, and the World Health Organization.
          The 11 air quality measures used represent some of the most significant threats to human health.
          </p>
          <p>
          10Green is a collaboration between: the <a href="https://climatechange.umaine.edu/about/">Climate Change Institute</a>,
          the <a href="https://umaine.edu/scis/">School of Computing and Information Sciences</a>, and <a href="https://www.garrand.com/">Garrand</a>.
          Funding for 10Green has been provided in part by <a href="https://www.heinz.org/">Heinz Endowments</a>,
          &nbsp;<a href="https://umaine.edu/">The University of Maine</a>, <a href="https://www.nsf.gov/">The National Science Foundation</a>,
          &nbsp;<a href="https://www.garrand.com/">Garrand</a>, and the <a href="https://umaine.edu/research-development/">UMaine Development Office</a>.
          </p>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default AboutContent;
