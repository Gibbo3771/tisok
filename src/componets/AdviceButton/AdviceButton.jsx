// @flow
import React from "react";

export type Props = {
  onClick: () => void
};

export default class AdviceButton extends React.Component<Props> {
  onClick = () => {
    this.props.onClick();
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
