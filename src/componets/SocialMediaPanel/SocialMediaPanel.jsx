// @flow
import React from "react";

export type Props = {
  url: string,
  slip: any
};

export default class SocialMediaPanel extends React.Component<Props> {
  render() {
    return <div id="social-media-panel" />;
  }
}
