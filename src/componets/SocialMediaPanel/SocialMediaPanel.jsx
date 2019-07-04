// @flow
import React from "react";
import { TwitterShareButton } from "react-share";
import FacebookShareButton from "../FacebookShareButton/FacebookShareButton";
import ReactTooltip from "react-tooltip";

export type Props = {
  url: string
};

export type State = {
  text: string,
  hashtags: Array<string>,
  description: string
};

export default class SocialMediaPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "Advice to live by...",
      hashtags: ["tisok", "lifeprotips"],
      description: "Randomly generate some advice!"
    };
  }

  render() {
    const { url } = this.props;
    const { text, hashtags } = this.state;
    return (
      <div
        className="social-media-panel"
        data-for="social-media-tooltip"
        data-tip="Share"
      >
        <FacebookShareButton url={url} />
        <TwitterShareButton
          className="share-twitter"
          url={url}
          title={text}
          hashtags={hashtags}
        >
          <i className="fab fa-twitter-square icon-twitter icon" />
        </TwitterShareButton>
        <ReactTooltip
          className="tooltip"
          id="social-media-tooltip"
          place="top"
          effect="solid"
          type="tooltip"
        />
      </div>
    );
  }
}
