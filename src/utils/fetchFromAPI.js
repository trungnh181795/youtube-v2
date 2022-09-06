import axios from "axios";

const {
  REACT_APP_RAPID_API_BASE_URL,
  REACT_APP_RAPID_API_KEY,
  REACT_APP_RAPID_API_HOST,
} = process.env;

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(
    `${REACT_APP_RAPID_API_BASE_URL}/${url}`,
    options
  );

  return data
};
