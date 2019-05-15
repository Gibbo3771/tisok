// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import AdviceButton from "../AdviceButton";
import sinon from "sinon";
import { expect as expectChai } from "chai";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  onClick: sinon.spy(),
  history: {
    push: sinon.spy()
  }
};
describe("AdviceButton", () => {
  beforeEach(() => {
    props.onClick.resetHistory();
    props.history.push.resetHistory();
  });
  it("renders correctly", () => {
    const tree = shallow(
      <AdviceButton history={props.history} onClick={props.onClick} />
    );
    expect(tree).toMatchSnapshot();
  });

  it("pushes '/' to the browser history", () => {
    const wrapper = shallow(
      <AdviceButton history={props.history} onClick={props.onClick} />
    );
    wrapper.find("button").simulate("click");
    expectChai(props.history.push.calledOnceWith("/")).to.be.true;
  });

  it("responds to click events", () => {
    const wrapper = shallow(
      <AdviceButton history={props.history} onClick={props.onClick} />
    );
    expectChai(props.onClick.calledOnce).to.be.false;
    wrapper.find("button").simulate("click");
    expectChai(props.onClick.calledOnce).to.be.true;
  });
});
