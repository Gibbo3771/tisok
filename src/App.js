import React from "react";
import AdviceSlip from "./componets/AdviceSlip";
import { random } from "./api/advice_api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: null
    };
  }

  render() {
    return (
      <div>
        <AdviceSlip
          onRequestRandom={this.handleRequest}
          text={this.state.advice}
        />
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
