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
    const { advice, mounted } = this.props;
    if (!advice) return <div />;
    const animeProps = {
      opacity: !mounted ? [0, 1] : [1, 0],
      delay: (element, index) => index * 15
    };
    return (
      <div className="advice-text">
        <Anime {...animeProps}>
          {advice.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </Anime>
      </div>
    );
  }
}
