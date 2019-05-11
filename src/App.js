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
    this.getAdvice();
  }

  render() {
    const { advice } = this.state;
    return (
      <div className="grid">
        <AdviceSlip advice={advice} />
        <AdviceButton onClick={this.handleClick} />
      </div>
    );
  }

  handleClick = () => {
    this.getAdvice();
  };

  splitAdvice = advice => {
    this.setState({ advice: "" });
    this.setState({ advice: advice.split("") });
  };

  getAdvice = () => {
    random()
      .then(response => {
        this.splitAdvice(response.data.slip.advice);
      })
      .catch(err => console.log(err));
  };
}
