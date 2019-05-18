// @flow
import React from "react";
import { Slip } from "../PropTypes";
import Anime from "react-anime";
import posed from "react-pose";

export type Props = {
  slip: Slip
};

export default class AdviceSlip extends React.Component<Props> {
  render() {
    const { slip } = this.props;
    if (!slip.advice) return <div />;
    return (
      <div id="advice-text" className="advice-text">
        {slip.advice.split("").map((v, i) => (
          <span key={i}>{v}</span>
        ))}
      </div>
    );
  }
}
