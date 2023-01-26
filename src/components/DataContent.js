import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CountyList from "../content/CountyData.json";
import { Button } from "bootstrap";

function DataContent() {

  const CountyListArray = CountyList;

  

  const handleOnSearch = (string, results) => {
    
  };

  const handleOnHover = (result) => {
    
  };

  const handleOnSelect = (item) => {
    console.log(item.internal_id);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };
  return (  

    <div style={{width:300, margin: 20}}>
    <ReactSearchAutocomplete
      items={CountyListArray}
      maxResults={5}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      onClear={handleOnClear}
      fuseOptions={{ keys: ["display_name"] }}
      resultStringKeyName={"display_name"}
      styling={{ zIndex: 3 }}
      autoFocus />
  </div>
    
    


  );
}

export default DataContent;
