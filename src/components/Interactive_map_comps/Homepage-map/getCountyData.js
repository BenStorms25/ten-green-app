import axios from "axios";

export const getCountyData = async (id) => {
  const response = await axios.get(
   // `http://204.197.4.170/10green/json/json_data-by-county/${id}.json`
   window.location.origin + '/10green/json/json_data-by-county/${id}.json'
  );
  return response;
};
