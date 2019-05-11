import axios from "axios";

const URL = "https://api.adviceslip.com/advice";

const random = () => {
  return axios.get(URL);
};

const get = id => {
  return axios.get(`${URL}/${id}`);
};

export { random, get };
