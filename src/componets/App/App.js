// @flow
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import AdviceButton from "../AdviceButton/AdviceButton";
import ShareModal from "../ShareModal/ShareModal";

import api from "../../api/advice_api";
import SocialMediaPanel from "../SocialMediaPanel/SocialMediaPanel";

export type Props = {};

export type State = {
  slip: any,
  url: string
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slip: {},
      url: window.location.href
    };
  }

  render() {
    const { slip, url } = this.state;
    return (
      <Router>
        <Route
          path="/:id?"
          render={props => (
            <div className="grid">
              <AdviceSlip
                {...props}
                slip={slip}
                onReady={id => this.getAdvice(id)}
              />
              <AdviceButton {...props} onClick={() => this.handleClick()} />
              <SocialMediaPanel url={url} />
            </div>
          )}
        />
      </Router>
    );
  }

  handleClick = () => {
    this.getRandomAdvice();
  };

  getAdvice = (id?: number) => {
    if (!id) this.getRandomAdvice();
    else this.getAdviceByID(id);
  };

  setAdvice = (response: any) => {
    const { slip } = response.data;
    this.setState({ slip: {} });
    this.setState({
      slip: slip,
      url: `${window.location.href}${slip.slip_id}`
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

  getAdviceByID = (id: number) => {
    api
      .get(id)
      .then(response => {
        this.setAdvice(response);
      })
      .catch(err => console.log(err));
  };
}
