import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

// All share stuff
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default class ShareModal extends React.Component {
  render() {
    const {
      isOpen,
      url,
      facebookQuote,
      facebookHashtag,
      twitterTitle,
      twitterHashtags
    } = this.props;
    return (
      <ReactModal id="modal" isOpen={this.props.isOpen}>
        <FacebookShareButton
          url={url}
          quote={facebookQuote}
          hashtag={facebookHashtag}
        >
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
      </ReactModal>
    );
  }
}

ShareModal.propTypes = {
  url: PropTypes.string.isRequired,
  facebookQuote: PropTypes.string.isRequired,
  facebookHashtag: PropTypes.string.isRequired,
  twitterTitle: PropTypes.string.isRequired,
  twitterHashtags: PropTypes.array.isRequired
};
