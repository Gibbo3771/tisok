import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareLink = props => {
  return (
    <CopyToClipboard
      text={`${window.location.href}`}
      onCopy={() => console.log("copied!")}
    >
      <span className="fas fa-clipboard" />
    </CopyToClipboard>
  );
};

export { ShareLink };
