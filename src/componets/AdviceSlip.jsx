import React, { Component } from "react";
import AdviceButton from "./AdviceButton";

export default class AdviceSlip extends Component {
  constructor(props) {
    super(props);
    console.log("Advice slip created!");
  }

  render() {
    return (
      <div>
        {this.props.text}
        <AdviceButton onClick={this.props.onRequestRandom} />
      </div>
    );
  }
}
