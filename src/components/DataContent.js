import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CountyList from "../content/ZipsToFips2.json";
import { useSelector, useDispatch } from "react-redux";

function DataContent() {
  const dispatch = useDispatch();
  
  const CountyListArray = CountyList;
  let incomingID = useSelector((state) => state.id);
  
  
  let [selectedString, setString] = useState("04469");
  
  let emptyString = "TEST";
  
  useEffect(() => {
    let empty = "TEST"
    console.log(incomingID.slice(5))
    setString((incomingID.slice(5)));
  }, [incomingID]);

  const handleOnHover = (result) => {};

  const handleOnSelect = (item) => {
    const id_as_string = item.internal_id.toString();

    dispatch({ type: "SET_ID", payload: id_as_string });
  };
  const handleOnSearch = (string, results) => {
    if (string.length === 5) {
      for (var i = 0; i < CountyList.length; i++) {
        if (CountyList[i].zip_code === string) {
          dispatch({
            type: "SET_ID",
            payload: CountyList[i].internal_id.toString(),
          });
          break;
        }
      }
    }
  };

  const handleOnFocus = () => {};

  const handleOnClear = () => {};

 

  return (
    <div style={{ width: 300, margin: 0 }}>
      <ReactSearchAutocomplete
        items={CountyListArray}
        showNoResults={false}
        maxResults={0}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        inputSearchString={selectedString}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        fuseOptions={{ keys: ["zip_code"] }}
        resultStringKeyName={"zip_code"}
        placeholder={"Enter ZIP Code"}
        styling={{ zIndex: 3 }}
        autoFocus={false}
      />
    </div>
  );
}

export default DataContent;
