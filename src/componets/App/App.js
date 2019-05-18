// @flow
import React from "react";
import AdviceSlip from "../AdviceSlip/AdviceSlip";
import AdviceButton from "../AdviceButton/AdviceButton";
import { withRouter } from "react-router-dom";

import api from "../../api/advice_api";
import SocialMediaPanel from "../SocialMediaPanel/SocialMediaPanel";
import { Slip } from "../PropTypes";

export type Props = {
  history: any,
  location: Location,
  match: any
};

export type State = {
  slip: Slip,
  url: string
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slip: {},
      url: ""
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
    const { slip, url } = this.state;
    return (
      <div className="grid">
        <AdviceSlip slip={slip} />
        <AdviceButton onClick={() => this.handleClick()} />
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

        this.setState(
          {
            slip: slip,
            url: `${window.location.href}${slip.slip_id}`
          },
          () => {
            this.props.history.push(`${slip.slip_id}`);
          }
        );
      })
      .catch(err => console.log(err));
  }

  getAdviceByID = (id: number) => {
    api
      .get(id)
      .then(response => {
        const { slip } = response.data;
        this.setState({
          slip: slip,
          url: `${window.location.href}${slip.slip_id}`
        });
      })
      .catch(err => console.log(err));
  };
}

export default withRouter(App);
