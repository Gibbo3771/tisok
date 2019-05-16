// @flow
import React from "react";
import Anime from "react-anime";
import { Slip } from "../PropTypes";

export type Props = {
  history: any,
  slip: Slip
};

export default class AdviceSlip extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { slip } = this.props;

    if (!slip.advice) return <div />;
    const animeProps = {
      opacity: [0, 1],
      delay: (element, index) => index * 15
    };
    return (
      <div id="advice-text" className="advice-text">
        <Anime {...animeProps}>
          {slip.advice.split("").map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </Anime>
      </div>
    );
  }
}
