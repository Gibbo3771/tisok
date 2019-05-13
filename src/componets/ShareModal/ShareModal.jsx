import React from "react";
import ReactModal from "react-modal";

export default class ShareModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactModal
        id="modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        onAfterOpen={this.props.onAfterOpen}
      />
    );
  }
}
