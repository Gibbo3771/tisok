import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import AdviceButton from "../AdviceButton/AdviceButton";
import ShareModal from "../ShareModal/ShareModal";

import api from "../../api/advice_api";
import SocialMediaPanel from "../SocialMediaPanel/SocialMediaPanel";

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
              <AdviceSlip
                {...props}
                slip={slip}
                onReady={() => this.getAdvice()}
              />
              <AdviceButton {...props} onClick={() => this.handleClick()} />
              <SocialMediaPanel />
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

  setAdvice = response => {
    this.setState({
      slip: response.data.slip
    });
  };

  getRandomAdvice = () => {
    return api
      .random()
      .then(response => {
        this.setAdvice(response);
      })
      .catch(err => console.log(err));
  };

  getAdviceByID = id => {
    api
      .get(id)
      .then(response => {
        this.setAdvice(response);
      })
      .catch(err => console.log(err));
  };
}
