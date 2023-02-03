import React, { useEffect } from "react";
import CustomHeader from "../components/CustomHeader";
import PollutantsContent from "../components/PollutantsContent";
import "./styles/Pollutants.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function PollutantMenu() {
  return (
    <DropdownButton id="dropdown-item-button" title="Select a Pollutant">
      <Dropdown.ItemText>Select a Pollutant</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

function Pollutants() {
  useEffect(() => {
    document.title = "Pollutants - 10Green";
  }, []);
  return (
    <div className="pollutants-page">
      <CustomHeader />
      <PollutantsContent />
    </div>
  );
}

export default Pollutants;
