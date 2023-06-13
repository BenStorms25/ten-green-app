//Despite the name, this is the code for the search bar displayed next to the map.

import React, { useEffect, useState } from "react";
import "./styles/DataContent.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
//import CountyList from "../content/ZipsToFips2.json";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function DataContent() {
  const dispatch = useDispatch();

  let [CountyList, setCountyList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gist.githubusercontent.com/Edaran123/8f39dcfded59c7e258c3a4338064d08d/raw/97560ac261842f92a9a7a14c0c652e3051666ed7/ZipsToFips2.json");
        setCountyList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
if (!CountyList)
{
  return null;
}

if (CountyList){
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
}}

export default DataContent;
