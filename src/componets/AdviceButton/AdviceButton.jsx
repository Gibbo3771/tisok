import React from "react";

export default class AdviceButton extends React.Component {
  onClick = () => {
    this.props.onClick();
    this.props.history.push("/");
  };

  render() {
    return (
      <button className="advice-get" onClick={this.onClick}>
        (｡^‿^｡)
      </button>
    );
  }
}
