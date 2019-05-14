// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import SocialMediaPanel from "../SocialMediaPanel";
import sinon from "sinon";
import { expect as expectChai } from "chai";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  url: "www.google.com",
  slip: { advice: "advice", slip_id: 1 }
};

describe("SocialMediaPanel", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <SocialMediaPanel url={props.url} slip={props.slip} />
    );
  });
  it("has can be found by id", () => {
    const wrapper = shallow(
      <SocialMediaPanel url={props.url} slip={props.slip} />
    );
    expectChai(wrapper.exists("#social-media-panel")).to.be.not.null;
  });
});
