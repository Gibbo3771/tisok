import React from "react";

const AdviceButton = props => {
  return (
    <a className="advice-get" onClick={props.onRequestRandom}>
      Advice
    </a>
  );
};

export default AdviceButton;
