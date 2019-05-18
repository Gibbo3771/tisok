// @flow
import React from "react";
import { Slip } from "../PropTypes";
import Anime from "react-anime";
import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";

export type Props = {
  slip: Slip
};

const charPoses = {
  exit: {
    opacity: 0,
    y: 80,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex * 10,
      stiffness: 200 + charInWordIndex * 90,
      damping: 8
    })
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex * 10,
      stiffness: 200 + charInWordIndex * 90,
      damping: 8
    })
  }
};

const Container = posed.div({
  enter: { opacity: 1, delay: 0, beforeChildren: true },
  exit: { opacity: 0 }
});

export default class AdviceSlip extends React.Component<Props> {
  render() {
    const { slip } = this.props;
    console.log("render");

    if (!slip.advice) return <div />;
    return (
      <PoseGroup id="advice-text" className="advice-text">
        <Container key={slip.advice}>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {slip.advice}
          </SplitText>
        </Container>
      </PoseGroup>
    );
  }
}
