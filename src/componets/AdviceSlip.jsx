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
    if (!slip) return <div />;
    const animeProps = {
      opacity: [0, 1],
      delay: (element, index) => index * 15
    };
    return (
      <div className="advice-text">
        <Anime {...animeProps}>
          {slip.advice.split("").map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </Anime>
      </div>
    );
  }
}
