import axios from "axios";

const URL = "https://api.adviceslip.com/advice";

const random = () => {
  return axios.get(URL);
};

export { random };
