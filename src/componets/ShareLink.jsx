import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

export default class ShareLink extends React.Component {
  render() {
    const { slip } = this.props;
    return (
      <React.Fragment>
        <CopyToClipboard
          text={`${window.location.href}${slip ? slip.slip_id : ""}`}
        >
          <i
            className="fa fa-clipboard share-link"
            ref="clipboard"
            data-for="clipboard"
            data-tip="Copy link to clipboard"
            data-is-capture="true"
          />
        </CopyToClipboard>
        <ReactTooltip
          className="clipboard-tooltip"
          id="clipboard"
          place="top"
          effect="solid"
          type="clipboard-tooltip"
          clickable={true}
        />
      </React.Fragment>
    );
  }
}
