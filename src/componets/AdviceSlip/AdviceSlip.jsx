import React from "react";
import Anime from "react-anime";

export default class AdviceSlip extends React.Component {
  constructor(props) {
    super(props);
    const {
      onReady,
      match: { params }
    } = this.props;
    onReady(params.id);
  }

  render() {
    const { slip } = this.props;
    if (!slip.advice) return <div />;
    const animeProps = {
      opacity: [0, 1],
      delay: (element, index) => index * 15
    };
    return (
      <div id="advice-text" className="advice-text">
        {slip.advice.split("").map((v, i) => (
          <span key={i}>{v}</span>
        ))}
      </div>
    );
  }
}
