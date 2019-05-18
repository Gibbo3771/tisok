import React from "react";
import AdviceSlip from "../AdviceSlip";

// mock match type, this is used because sometimes id is indefined depending on use case
type Match = {
  params: {| id: number | void |}
};
// mock match
const match: Match = {
  params: { id: 1 }
};

const props = {
  onReady: sinon.spy(),
  match: match,
  slip: {
    slip_id: 1,
    advice: "always write tests first"
  }
};

describe("AdviceSlip", () => {
  beforeEach(() => {
    props.onReady.resetHistory();
  });
  it("renders correctly if it has a slip", () => {
    const { onReady, match, slip } = props;
    const tree = shallow(
      <AdviceSlip slip={slip} onReady={onReady} match={match} />
    );
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly if it has an empty slip", () => {
    const { onReady, match } = props;
    const slip = {};
    const tree = shallow(
      <AdviceSlip onReady={onReady} match={match} slip={slip} />
    );
    expect(tree).toMatchSnapshot();
  });
});
