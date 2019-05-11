import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdviceSlip from "./componets/AdviceSlip";
import AdviceButton from "./componets/AdviceButton";

import { random, get } from "./api/advice_api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slip: null
    };
  }

  render() {
    const { slip } = this.state;
    return (
      <Router>
        <Route
          path="/:id?"
          render={props => (
            <div className="grid">
              <AdviceSlip {...props} slip={slip} onReady={this.getAdvice} />
              <AdviceButton {...props} onClick={this.handleClick} />
            </div>
          )}
        />
      </Router>
    );
  }

  handleClick = () => {
    this.getRandomAdvice();
  };

  getAdvice = id => {
    if (!id) this.getRandomAdvice();
    else this.getAdviceByID(id);
  };

  getRandomAdvice = () => {
    random()
      .then(response => {
        console.log(response);
        this.setState({ slip: null });
        this.setState({
          slip: response.data.slip
        });
      })
      .catch(err => console.log(err));
  };

  getAdviceByID = id => {
    get(id)
      .then(response => {
        this.setState({ slip: null });
        this.setState({
          slip: response.data.slip
        });
      })
      .catch(err => console.log(err));
  };
}
