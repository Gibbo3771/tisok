import React from "react";

export default class AdviceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: ":-)"
    };
  }

  handleMouseEnter = () => {
    this.setState({ face: ":D" });
  };

  handleMouseLeave = () => {
    this.setState({ face: ":)" });
  };

  onClick = () => {
    this.setState({ face: "xD" });
    this.props.onClick();
    this.props.history.push("/");
  };

  render() {
    return (
      <button
        className="advice-get"
        onClick={this.onClick}
        onMouseUp={this.handleMouseEnter}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.face}
      </button>
    );
  }
}
