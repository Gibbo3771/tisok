// @flow
import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export type Props = {
  url: string,
  slip: any
};

export type State = {
  text: string,
  hashtags: Array<string>
};

export default class SocialMediaPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "Advice to live by...",
      hashtags: ["tisok", "lifeprotips"]
    };
  }

  render() {
    const { url } = this.props;
    const { text, hashtags } = this.state;
    return (
      <div id="social-media-panel">
        <FacebookShareButton
          className="share-facebook"
          url={url}
          quote={text}
          hashtag={hashtags[0]}
        >
          <FacebookIcon id="icon-facebook" size={48} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          className="share-twitter"
          url={url}
          title={text}
          hashtags={hashtags}
        >
          <TwitterIcon id="icon-twitter" size={48} round={true} />
        </TwitterShareButton>
      </div>
    );
  }
}
