import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { jsxFragment } from "@babel/types";

const ShareLink = props => {
  return (
    <CopyToClipboard
      text={`${window.location.href}`}
      onCopy={() => console.log("copied!")}
    >
      <i className="fa fa-clipboard share-link" />
    </CopyToClipboard>
  );
};

export { ShareLink };
