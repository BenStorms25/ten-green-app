import React, { useState, useEffect } from "react";

export const dataFilter = (data, year) => {
  let id = data[0].id;

  // return new Map(
  //   data[0].data.map((val) => {
  //     return [id, val];
  //   })
  // );
  //return new Map(data.map((obj) => [obj.id, +obj["ozone_" + year]]));
  return new Map(data.map((obj) => [obj.id, obj.data[year - 2000]]));
};
