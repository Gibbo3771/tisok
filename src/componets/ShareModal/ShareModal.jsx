import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

// All share stuff
import { FacebookShareButton } from "react-share";

export default class ShareModal extends React.Component {
  render() {
    const {
      isOpen,
      facebookQuote,
      facebookHashtag,
      twitterTitle,
      twitterHashtags
    } = this.props;
    return (
      <ReactModal id="modal" isOpen={this.props.isOpen}>
        <div>
          <FacebookShareButton
            quote={facebookQuote}
            hashtag={facebookHashtag}
          />
        </div>
      </ReactModal>
    );
  }
}

ShareModal.propTypes = {
  facebookQuote: PropTypes.string.isRequired,
  facebookHashtag: PropTypes.string.isRequired,
  twitterTitle: PropTypes.string.isRequired,
  twitterHashtags: PropTypes.array.isRequired
};
