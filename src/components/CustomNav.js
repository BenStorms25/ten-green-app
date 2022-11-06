import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./CustomNav.css";
import tenGreenLogo from "../images/10Greenblacklogo.png";
import { InputGroup } from "react-bootstrap";

function CustomNav() {
  // have not figured out how we should be linking the pages
  // would like to use react-router, and have found tutorial on how to do so,
  // but still need to figure that out
  return (
    <div className="navbar">
      <img src={tenGreenLogo} className="navbar-logo"></img>
      <div className="nav">
        <a className="custom-nav-link" href="#home">
          Home
        </a>
        <a className="custom-nav-link" href="#data">
          Data
        </a>
        <a className="custom-nav-link" href="#pollutants">
          Pollutants
        </a>
        <a className="custom-nav-link" href="#ozone">
          Ozone
        </a>
        <a className="custom-nav-link" href="#about">
          About
        </a>
      </div>
    </div>
  );
}

// <div className="top-bar">
//       <Navbar className="navbar">
//         <img src={tenGreenLogo} className="navbar-logo"></img>
//         <Container>
//           <Nav className="nav">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#data">Data</Nav.Link>
//             <Nav.Link href="#pollutants">Pollutants</Nav.Link>
//             <Nav.Link href="#standards">Standards</Nav.Link>
//             <Nav.Link href="#ozone">Ozone</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>

export default CustomNav;
