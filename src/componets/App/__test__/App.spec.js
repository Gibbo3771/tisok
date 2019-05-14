import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import App from "../App";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { expect as expectChai } from "chai";
import axios from "axios";
import api from "../../../api/advice_api";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

let wrapper = null;
let instance = null;

describe("App", () => {
  beforeEach(() => {
    wrapper = mount(<App />);
    instance = wrapper.instance();
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have valid initial state", () => {
    expectChai(wrapper.state().slip).to.be.not.null;
    expectChai(wrapper.state().isModalOpen).to.be.false;
  });
  it("responds to the advice button being clicked", async () => {
    const clickSpy = sinon.spy(instance, "handleClick");
    const getRandomAdvice = sinon.spy(instance, "getRandomAdvice");
    const axiosSpy = sinon.spy(axios, "get");
    expectChai(wrapper.exists("#advice-button")).to.be.true;
    wrapper.find("#advice-button").simulate("click");
    expectChai(clickSpy.calledOnce).to.be.true;
    expectChai(getRandomAdvice.callCount).to.equal(1);
    expectChai(axiosSpy.callCount).to.equal(1);
    axiosSpy.restore();
  });
  it("sets the slip to new values with button clicks", () => {
    expectChai(wrapper.exists("#advice-button")).to.be.true;
    wrapper.find("#advice-button").simulate("click");
    expectChai(wrapper.state().slip.slip_id).to.equal(1);
    expectChai(wrapper.state().slip.advice).to.equal("testing is important");
  });
  it("sets the slip when setAdvice is called", () => {
    const response = {
      data: { slip: { slip_id: 5, advice: "solid advice" } }
    };
    instance.setAdvice(response);
    expectChai(wrapper.state().slip.slip_id).to.equal(5);
    expectChai(wrapper.state().slip.advice).to.equal("solid advice");
  });
  it("sets the slip when getRandomAdvice is called", () => {
    const spy = sinon.spy(axios, "get");
    instance.getRandomAdvice();
    expectChai(wrapper.state().slip.slip_id).to.equal(1);
    expectChai(wrapper.state().slip.advice).to.equal("testing is important");
    expectChai(spy.callCount).to.equal(1);
    spy.restore();
  });
  it("sets the slip when getAdviceByID is called", () => {
    const spy = sinon.spy(axios, "get");
    instance.getAdviceByID(1);
    expectChai(wrapper.state().slip.slip_id).to.equal(1);
    expectChai(wrapper.state().slip.advice).to.equal("testing is important");
    expectChai(spy.callCount).to.equal(1);
    spy.restore();
  });
  it("has a social media panel", () => {
    expectChai(wrapper.exists(".social-media-panel")).to.be.true;
  });
});
