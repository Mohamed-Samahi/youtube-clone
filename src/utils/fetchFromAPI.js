import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: "50",
  },
  headers: {
    // "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "7c99fbc014msh217fcde312db0b4p169670jsn2f8bcbe1eb21",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
