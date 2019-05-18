// @flow
import React from "react";
import { FacebookProvider, ShareButton } from "react-facebook";

export type Props = {
  url: string
};

export default class FacebookShareButton extends React.Component<Props> {
  render() {
    return (
      <FacebookProvider appId={815141325508483}>
        <ShareButton href={this.props.url}>Share</ShareButton>
      </FacebookProvider>
    );
  }
}
