import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const options = {
  method: "GET",
  params: {
    maxResults: "50",
  },
  headers: {
    // "content-type": "application/octet-stream",
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
