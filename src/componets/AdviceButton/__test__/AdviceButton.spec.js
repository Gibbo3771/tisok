// @flow
import React from "react";
import AdviceButton from "../AdviceButton";

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
    expect(props.history.push.calledOnceWith("/")).toBeTruthy();
  });

  it("responds to click events", () => {
    const wrapper = shallow(
      <AdviceButton history={props.history} onClick={props.onClick} />
    );
    expect(props.onClick.calledOnce).toBeFalsy();
    wrapper.find("button").simulate("click");
    expect(props.onClick.calledOnce).toBeTruthy();
  });
});
