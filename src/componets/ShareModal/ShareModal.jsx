import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

// All share stuff
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Advice to live by...",
      hashtags: ["tisok", "lifeprotips"]
    };
  }
  render() {
    const { isOpen, url } = this.props;
    const { text, hashtags } = this.state;
    return (
      <ReactModal id="modal" isOpen={this.props.isOpen}>
        <FacebookShareButton url={url} quote={text} hashtag={hashtags[0]}>
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={text} hashtags={hashtags}>
          <TwitterIcon size={48} round={true} />
        </TwitterShareButton>
      </ReactModal>
    );
  }
}

ShareModal.propTypes = {
  url: PropTypes.string.isRequired
};
