import React from "react";

export default class AdviceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: "｡^‿^｡"
    };
  }

  onClick = () => {
    this.props.onClick();
    this.props.history.push("/");
  };

  render() {
    return (
      <button className="advice-get" onClick={this.onClick}>
        {this.state.face}
      </button>
    );
  }
}
