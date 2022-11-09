import React from "react";
import tenGreenLogo from "../images/10Greenblacklogo.png";
import "./styles/CustomNav.css";

function CustomNav() {
  return (
    <div className="navbar">
      <img src={tenGreenLogo} alt="" className="navbar-logo"></img>
      <div className="nav">
        <a className="custom-nav-link" href="/">
          Home
        </a>
        <a className="custom-nav-link" href="data">
          Data
        </a>
        <a className="custom-nav-link" href="pollutants">
          Pollutants
        </a>
        <a className="custom-nav-link" href="standards">
          Standards
        </a>
        <a className="custom-nav-link" href="ozone">
          Ozone
        </a>
        <a className="custom-nav-link" href="about">
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
//         </Container>--
//       </Navbar>
//     </div>

export default CustomNav;
