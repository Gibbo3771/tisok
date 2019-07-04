// @flow
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import { Slip } from "../PropTypes";

export type Props = {
  slip: Slip
};

export default class ShareLink extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <CopyToClipboard text={`${window.location.href}`}>
          <i
            className="fas fa-clipboard share-link"
            ref="clipboard"
            data-for="clipboard"
            data-tip="Copy link to clipboard"
            data-is-capture="true"
          />
        </CopyToClipboard>
        <ReactTooltip
          className="tooltip"
          id="clipboard"
          place="top"
          effect="solid"
          type="tooltip"
          clickable={true}
        />
      </React.Fragment>
    );
  }
}
