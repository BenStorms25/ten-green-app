import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const DataFilter2 = (data, year, id) => {
  
  
  // return data that will be mapped to the map
  return new Map(data.map((obj) => [obj.id, obj.data[year - 1980]]));
};
