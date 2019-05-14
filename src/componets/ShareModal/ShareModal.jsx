import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

// All share stuff
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import ShareLink from "../ShareLink/ShareLink";

export default class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Advice to live by...",
      hashtags: ["tisok", "lifeprotips"]
    };
  }
  render() {
    const { isOpen, url, slip, onRequestClose } = this.props;

    const { text, hashtags } = this.state;
    return (
      <ReactModal
        className="share-modal"
        id="modal"
        isOpen={this.props.isOpen}
        onRequestClose={onRequestClose}
      >
        <FacebookShareButton
          className="share-facebook"
          url={url}
          quote={text}
          hashtag={hashtags[0]}
        >
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          className="share-twitter"
          url={url}
          title={text}
          hashtags={hashtags}
        >
          <TwitterIcon size={48} round={true} />
        </TwitterShareButton>
        <ShareLink slip={slip} />
      </ReactModal>
    );
  }
}

ShareModal.propTypes = {
  url: PropTypes.string.isRequired,
  slip: PropTypes.any.isRequired,
  onRequestClose: PropTypes.func.isRequired
};
