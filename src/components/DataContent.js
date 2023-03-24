import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CountyList from "../content/ZipsToFips2.json";
import { useDispatch, useSelector } from "react-redux";

function DataContent() {
  const dispatch = useDispatch();

  const CountyListArray = CountyList;
  let incomingID = useSelector((state) => state.id);
  let [selectedString, setString] = useState("04469");

  useEffect(() => {
    setString(incomingID.slice(5));
  }, [incomingID]);

  const handleOnHover = (result) => {};

  const handleOnSelect = (item) => {
    const id_as_string = item.internal_id.toString();

    dispatch({ type: "SET_ID", payload: id_as_string });
  };
  const handleOnSearch = (string, results) => {
    if (string.length < 6) {
      for (var i = 0; i < CountyList.length; i++) {
        if (parseInt(CountyList[i].zip_code) === parseInt(string)) {
          console.log(string);
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
    <div id="zip-code">
      <ReactSearchAutocomplete
        items={CountyListArray}
        showNoResults={true}
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
