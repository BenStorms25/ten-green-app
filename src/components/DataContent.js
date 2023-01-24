import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CountyList from "../content/FinalCountyList.json";
import { Button } from "bootstrap";
function DataContent() {

  const CountyListArray = CountyList;

  const ClickableLocation = (location) => <Button>{location}</Button>

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };
  return (  
    <><ReactSearchAutocomplete
      items={CountyListArray}
      maxResults={15}
      fuseOptions={{ keys: ["state_name"] }}
      resultStringKeyName={"county_name"}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      onClear={handleOnClear}
      styling={{ zIndex: 3 }}
      autoFocus /><ClickableLocation location="test" /></>


  );
}

export default DataContent;
