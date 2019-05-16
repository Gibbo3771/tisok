// @flow
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import AdviceButton from "../AdviceButton/AdviceButton";
import ShareModal from "../ShareModal/ShareModal";
import { withRouter } from "react-router-dom";

import api from "../../api/advice_api";
import SocialMediaPanel from "../SocialMediaPanel/SocialMediaPanel";

export type Props = {
  history: any
};

export type State = {
  slip: any,
  url: string
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(props);

    this.state = {
      slip: {},
      url: window.location.href
    };
    this.getAdvice();
  }

  render() {
    const { slip, url } = this.state;

    return (
      <Route path="/:id?">
        <div className="grid">
          <AdviceSlip {...this.props} slip={slip} />
          <AdviceButton
            {...this.props}
            onClick={() => this.handleClick(this.props.history)}
          />
          <SocialMediaPanel url={url} />
        </div>
      </Route>
    );
  }

  handleClick = (history: any) => {
    history.push(`${this.state.slip.slip_id}`);
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

export default withRouter(App);
