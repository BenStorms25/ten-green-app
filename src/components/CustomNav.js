import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNav() {
  // have not figured out how we should be linking the pages
  // would like to use react-router, and have found tutorial on how to do so,
  // but still need to figure that out
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Data</Nav.Link>
          <Nav.Link href="#pollutants">Pollutants</Nav.Link>
          <Nav.Link href="#standards">Standards</Nav.Link>
          <Nav.Link href="#ozone">Ozone</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
