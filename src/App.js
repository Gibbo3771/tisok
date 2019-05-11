import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdviceSlip from "./componets/AdviceSlip";
import AdviceButton from "./componets/AdviceButton";

import { random, get } from "./api/advice_api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: null
    };
  }

  render() {
    const { advice } = this.state;
    return (
      <Router>
        <Route
          path="/:id?"
          render={props => (
            <div className="grid">
              <AdviceSlip {...props} advice={advice} onReady={this.getAdvice} />
              <AdviceButton onClick={this.handleClick} />
            </div>
          )}
        />
      </Router>
    );
  }

  handleClick = () => {
    this.getRandomAdvice();
  };

  splitAdvice = advice => {
    this.setState({ advice: "" });
    this.setState({ advice: advice.split("") });
  };

  getAdvice = id => {
    if (!id) this.getRandomAdvice();
    else this.getAdviceByID(id);
  };

  getRandomAdvice = () => {
    random()
      .then(response => {
        this.splitAdvice(response.data.slip.advice);
      })
      .catch(err => console.log(err));
  };

  getAdviceByID = id => {
    get(id)
      .then(response => {
        console.log(response);

        this.splitAdvice(response.data.slip.advice);
      })
      .catch(err => console.log(err));
  };
}
