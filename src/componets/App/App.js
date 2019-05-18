// @flow
import React from "react";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import AdviceButton from "../AdviceButton/AdviceButton";
import { withRouter } from "react-router-dom";

import api from "../../api/advice_api";
import SocialMediaPanel from "../SocialMediaPanel/SocialMediaPanel";
import { Slip } from "../PropTypes";
import ShareLink from "../ShareLink/ShareLink";

export type Props = {
  history: any,
  location: Location,
  match: any
};

export type State = {
  slip: Slip
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slip: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.getAdviceByID(id);
    else this.getRandomAdvice();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getAdviceByID(this.props.match.params.id);
      return;
    }
  }

  render() {
    const { slip } = this.state;
    return (
      <div className="grid">
        <AdviceSlip slip={slip} />
        <AdviceButton onClick={() => this.handleClick()} />
        <ShareLink slip={slip} />
        {/* <SocialMediaPanel url={url} /> */}
      </div>
    );
  }

  handleClick = () => {
    this.getRandomAdvice();
  };

  getRandomAdvice() {
    return api
      .random()
      .then(response => {
        const { slip } = response.data;
        this.props.history.push(`${slip.slip_id}`);
        this.setState({
          slip: slip
        });
      })
      .catch(err => console.log(err));
  }

  getAdviceByID = (id: number) => {
    api
      .get(id)
      .then(response => {
        const { slip } = response.data;
        this.setState({
          slip: slip
        });
      })
      .catch(err => console.log(err));
  };
}

export default withRouter(App);
