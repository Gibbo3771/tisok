// @flow
import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import ReactTooltip from "react-tooltip";

export type Props = {
  url: string
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
      <div className="social-media-panel">
        <FacebookShareButton
          className="share-facebook"
          url={url}
          quote={text}
          hashtag={hashtags[0]}
        >
          <i
            class="fab fa-facebook-square icon-facebook icon"
            data-for="facebook-tooltip"
            data-tip="Share to Facebook"
          />
          <ReactTooltip
            className="tooltip"
            id="facebook-tooltip"
            place="top"
            effect="solid"
            type="tooltip"
          />
        </FacebookShareButton>
        <TwitterShareButton
          className="share-twitter"
          url={url}
          title={text}
          hashtags={hashtags}
        >
          <i
            class="fab fa-twitter-square icon-twitter icon"
            data-for="twitter-tooltip"
            data-tip="Share to Twitter"
          />
          <ReactTooltip
            className="tooltip"
            id="twitter-tooltip"
            place="top"
            effect="solid"
            type="tooltip"
          />
        </TwitterShareButton>
      </div>
    );
  }
}
