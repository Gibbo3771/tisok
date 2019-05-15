// @flow
import React from "react";
import App from "../App";
import axios from "axios";
import api from "../../../api/advice_api";

jest.mock("axios");

let wrapper = mount(<App />);
let instance = wrapper.instance();

describe("App", () => {
  beforeEach(() => {
    wrapper = mount(<App />);
    instance = wrapper.instance();
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have valid initial state", () => {
    expect(wrapper.state().slip).toBeDefined();
    expect(wrapper.state().url).toBeDefined();
  });
  it("responds to the advice button being clicked", async () => {
    const clickSpy = sinon.spy(instance, "handleClick");
    const getRandomAdvice = sinon.spy(instance, "getRandomAdvice");
    const axiosSpy = sinon.spy(axios, "get");
    expect(wrapper.exists("#advice-button")).toBeTruthy();
    wrapper.find("#advice-button").simulate("click");
    expect(clickSpy.calledOnce).toBeTruthy();
    expect(getRandomAdvice.callCount).toEqual(1);
    expect(axiosSpy.callCount).toEqual(1);
    axiosSpy.restore();
  });
  it("sets the slip to new values with button clicks", () => {
    expect(wrapper.exists("#advice-button")).toBeTruthy();
    wrapper.find("#advice-button").simulate("click");
    expect(wrapper.state().slip.slip_id).toEqual(1);
    expect(wrapper.state().slip.advice).toEqual("testing is important");
  });
  it("sets the slip when setAdvice is called", () => {
    const response = {
      data: { slip: { slip_id: 5, advice: "solid advice" } }
    };
    instance.setAdvice(response);
    expect(wrapper.state().slip.slip_id).toEqual(5);
    expect(wrapper.state().slip.advice).toEqual("solid advice");
  });
  it("sets the slip when getRandomAdvice is called", () => {
    const spy = sinon.spy(axios, "get");
    instance.getRandomAdvice();
    expect(wrapper.state().slip.slip_id).toEqual(1);
    expect(wrapper.state().slip.advice).toEqual("testing is important");
    expect(spy.callCount).toEqual(1);
    spy.restore();
  });
  it("sets the slip when getAdviceByID is called", () => {
    const spy = sinon.spy(axios, "get");
    instance.getAdviceByID(1);
    expect(wrapper.state().slip.slip_id).toEqual(1);
    expect(wrapper.state().slip.advice).toEqual("testing is important");
    expect(spy.callCount).toEqual(1);
    spy.restore();
  });
  it("has a social media panel", () => {
    expect(wrapper.exists(".social-media-panel")).toBeTruthy();
  });
});
