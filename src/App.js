import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdviceSlip from "./componets/AdviceSlip/AdviceSlip";
import AdviceButton from "./componets/AdviceButton/AdviceButton";
import ShareModal from "./componets/ShareModal/ShareModal";

import api from "./api/advice_api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slip: {},
      isModalOpen: false
    };
  }

  render() {
    const { slip, isModalOpen } = this.state;
    return (
      <Router>
        <Route
          path="/:id?"
          render={props => (
            <div className="grid">
              <AdviceSlip {...props} slip={slip} onReady={this.getAdvice} />
              <AdviceButton {...props} onClick={this.handleClick} />
              <ShareModal
                isOpen={isModalOpen}
                url={`${window.location.href}${slip ? slip.slip_id : ""}`}
                slip={slip}
                onRequestClose={this.onRequestModalClose}
              />
            </div>
          )}
        />
      </Router>
    );
  }

  handleClick = () => {
    this.getRandomAdvice();
  };

  onRequestModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  getAdvice = id => {
    if (!id) this.getRandomAdvice();
    else this.getAdviceByID(id);
  };

  getRandomAdvice = () => {
    api
      .random()
      .then(response => {
        this.setState({ slip: {} });
        this.setState({
          slip: response.data.slip
        });
      })
      .catch(err => console.log(err));
  };

  getAdviceByID = id => {
    api
      .get(id)
      .then(response => {
        this.setState({ slip: {} });
        this.setState({
          slip: response.data.slip
        });
      })
      .catch(err => console.log(err));
  };
}
