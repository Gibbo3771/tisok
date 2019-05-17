// @flow
import React from "react";
import { Slip } from "../PropTypes";

export type Props = {
  slip: Slip
};

export default class AdviceSlip extends React.Component<Props> {
  render() {
    const { slip } = this.props;
    if (!slip.advice) return <div />;
    const animeProps = {
      opacity: [0, 1],
      delay: (element, index) => index * 15
    };
    return (
      <div id="advice-text" className="advice-text">
        {slip.advice.split("").map((v, i) => (
          <span key={i}>{v}</span>
        ))}
      </div>
    );
  }
}
