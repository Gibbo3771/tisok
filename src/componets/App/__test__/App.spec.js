import React from "react";
import App from "../App";
import axios from "axios";
import api from "../../../api/advice_api";

import { MemoryRouter, Route } from "react-router-dom";

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

  it("should have an advice button", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    expect(wrapper.exists("#advice-button")).toBeTruthy();
  });

  it("it calls handleClick when advice button is clicked", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    const instance = wrapper.instance();
    const spy = sinon.spy(instance, "handleClick");
    wrapper.find("#advice-button").simulate("click");
    expect(spy.calledOnce).toBeTruthy();
  });

  it("it calls getRandomAdvice when advice button is clicked", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    const instance = wrapper.instance();
    const spy = sinon.spy(instance, "getRandomAdvice");
    wrapper.find("#advice-button").simulate("click");
    expect(spy.callCount).toEqual(1);
  });

  it("it does a fetch request using axios get when advice button is clicked", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    const axiosSpy = sinon.spy(axios, "get");
    wrapper.find("#advice-button").simulate("click");
    expect(axiosSpy.callCount).toEqual(1);
    axiosSpy.restore();
  });

  // TODO reimplement this when I have time
  xit("has a social media panel", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    ).find("App");
    expect(wrapper.exists(".social-media-panel")).toBeTruthy();
  });
});
