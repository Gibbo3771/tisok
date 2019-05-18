import React from "react";
import App from "../App";
import axios from "axios";
import api from "../../../api/advice_api";

import { MemoryRouter, Route } from "react-router-dom";

// FIXME this needs an entire re-write as I went mental with routes
// TODO something
jest.mock("axios");

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  it("should have valid initial state", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state().url).toBeDefined();
  });
  it("should have the correct props, history and location", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    expect(wrapper.props().history).toBeDefined();
    expect(wrapper.props().location).toBeDefined();
  });
  it("should have an advice button", () => {});
  test("the advice button should fire handle click when clicked", () => {});
  it("responds to the advice button being clicked", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    const instance = wrapper.instance();
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
  xit("sets the slip to new values with button clicks", () => {
    expect(wrapper.exists("#advice-button")).toBeTruthy();
    wrapper.find("#advice-button").simulate("click");
    expect(wrapper.state().slip.slip_id).toEqual(1);
    expect(wrapper.state().slip.advice).toEqual("testing is important");
  });
  xit("sets the slip when setAdvice is called", () => {
    const response = {
      data: { slip: { slip_id: 5, advice: "solid advice" } }
    };
    instance.setAdvice(response);
    expect(wrapper.state().slip.slip_id).toEqual(5);
    expect(wrapper.state().slip.advice).toEqual("solid advice");
  });
  xit("sets the slip when getRandomAdvice is called", () => {
    const spy = sinon.spy(axios, "get");
    instance.getRandomAdvice();
    expect(wrapper.state().slip.slip_id).toEqual(1);
    expect(wrapper.state().slip.advice).toEqual("testing is important");
    expect(spy.callCount).toEqual(1);
    spy.restore();
  });
  xit("sets the slip when getAdviceByID is called", () => {
    const spy = sinon.spy(axios, "get");
    instance.getAdviceByID(1);
    expect(wrapper.state().slip.slip_id).toEqual(1);
    expect(wrapper.state().slip.advice).toEqual("testing is important");
    expect(spy.callCount).toEqual(1);
    spy.restore();
  });
  xit("has a social media panel", () => {
    expect(wrapper.exists(".social-media-panel")).toBeTruthy();
  });
});
