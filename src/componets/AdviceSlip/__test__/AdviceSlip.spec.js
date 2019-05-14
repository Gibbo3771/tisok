import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import AdviceSlip from "../AdviceSlip";
import sinon from "sinon";
import { expect as expectChai } from "chai";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  onReady: null,
  match: {
    params: {
      id: null
    }
  },
  slip: {
    slip_id: null,
    advice: null
  }
};

describe("AdviceSlip", () => {
  beforeEach(() => {
    props.onReady = sinon.spy();
    props.match.params.id = 1;
    props.slip.slip_id = 1;
    props.slip.advice = "always write tests first";
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
    match.params.id = undefined;
    const tree = shallow(
      <AdviceSlip slip={slip} onReady={onReady} match={match} />
    );
    expectChai(onReady.calledOnceWith(undefined)).to.be.true;
  });
  it("calls on ready with the id if an id is given", () => {
    const { onReady, match, slip } = props;
    // Undefined if route has no params
    const tree = shallow(
      <AdviceSlip slip={slip} onReady={onReady} match={match} />
    );
    expectChai(onReady.calledOnceWith(1)).to.be.true;
  });
});
