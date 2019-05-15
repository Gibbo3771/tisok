// @flow
import React from "react";

export type Props = {
  onClick: () => void,
  history: any
};

export default class AdviceButton extends React.Component<Props> {
  onClick = () => {
    this.props.onClick();
    this.props.history.push("/");
  };

  render() {
    return (
      <button
        id="advice-button"
        className="advice-get"
        onClick={() => this.onClick()}
      >
        (｡^‿^｡)
      </button>
    );
  }
}
