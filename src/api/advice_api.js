import axios from "axios";

const URL = "https://api.adviceslip.com/advice";

class AdviceAPI {
  random = () => {
    return axios.get(URL);
  };

  get = id => {
    return axios.get(`${URL}/${id}`);
  };
}

export default new AdviceAPI();
