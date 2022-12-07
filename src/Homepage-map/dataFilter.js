import React, { useState, useEffect } from "react";

export const dataFilter = (
  data,
  year,
  setCountyName,
  setTenGreenScore,
  setAqi,
  setArsenic,
  setCadmium,
  setCo,
  setLead,
  setNickel,
  setNo,
  setNo2,
  setOzone,
  setPm10,
  setPm25,
  setSo2
) => {
  let id = data[0].id;

  const handleSetAqi = () => {
    setAqi(24);
  };

  // return new Map(
  //   data[0].data.map((val) => {
  //     return [id, val];
  //   })
  // );
  //return new Map(data.map((obj) => [obj.id, +obj["ozone_" + year]]));
  return new Map(data.map((obj) => [obj.id, obj.data[year - 2000]]));
};
