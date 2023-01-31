import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CountyList from "../content/ZipsToFips2.json";
import { Button } from "bootstrap";
import { useSelector, useDispatch } from "react-redux";



function DataContent() {

  const dispatch = useDispatch();

  const CountyListArray = CountyList;

  

  const handleOnSearch = (string, results) => {
    
  };

  const handleOnHover = (result) => {
    
  };

  const handleOnSelect = (item) => {
    const id_as_string = item.internal_id.toString();
    console.log(item.internal_id);
    dispatch({ type: "SET_ID", payload: id_as_string});
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
      fuseOptions={{ keys: ["zip_code"] }}
      resultStringKeyName={"zip_code"}
      styling={{ zIndex: 3 }}
      autoFocus />
  </div>
    
    


  );
}

export default DataContent;
