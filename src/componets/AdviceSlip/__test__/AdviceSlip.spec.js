// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import AdviceSlip from "../AdviceSlip";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

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
  it("calls on ready with no id if no id is given", () => {
    const { onReady, match, slip } = props;
    // Undefined if route has no params
    // $ExpectError
    match.params.id = undefined;
    const tree = shallow(
      <AdviceSlip slip={slip} onReady={onReady} match={match} />
    );
    expect(onReady.calledOnceWith(undefined)).toBeTruthy();
  });
  it("calls on ready with the id if an id is given", () => {
    const { onReady, match, slip } = props;
    match.params.id = 1;
    const tree = shallow(
      <AdviceSlip slip={slip} onReady={onReady} match={match} />
    );
    expect(onReady.calledOnceWith(1)).toBeTruthy();
  });
});
