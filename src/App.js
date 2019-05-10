import React from "react";
import AdviceSlip from "./componets/AdviceSlip";
import AdviceButton from "./componets/AdviceButton";

import { random } from "./api/advice_api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: null
    };
    this.handleRequest();
  }

  render() {
    return (
      <div className="flex">
        <AdviceSlip text={this.state.advice} />
        <AdviceButton onRequestRandom={this.handleRequest} />
      </div>
    );
  }

  handleRequest = () => {
    random()
      .then(response => {
        this.setState({ advice: response.data.slip.advice });
      })
      .catch(err => console.log(err));
  };
}
