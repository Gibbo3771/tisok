// @flow
import axios from "axios";

const URL = "https://api.adviceslip.com/advice";

class AdviceAPI {
  random = () => {
    return axios.get<string, any>(URL);
  };

  get = (id: number) => {
    return axios.get<string, any>(`${URL}/${id}`);
  };
}

export default new AdviceAPI();
