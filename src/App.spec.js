import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import App from "./App";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { expect as expectChai } from "chai";
import axios from "axios";
import api from "./api/advice_api";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

let wrapper = null;

describe("App", () => {
  beforeAll(() => {
    wrapper = mount(<App />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have valid initial state", () => {
    expectChai(wrapper.state().slip).to.be.not.null;
    expectChai(wrapper.state().isModalOpen).to.be.false;
  });
  it("responds to the advice button being clicked", () => {
    const spy = sinon.spy(wrapper.instance(), "handleClick");
  });
});
