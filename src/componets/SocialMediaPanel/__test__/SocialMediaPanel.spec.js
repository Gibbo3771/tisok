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
  url: "www.google.com"
};

describe("SocialMediaPanel", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<SocialMediaPanel url={props.url} />);
  });
  it("has can be found by id", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expectChai(wrapper.exists("#social-media-panel")).to.be.not.null;
  });
  xit("should have a facebook button and icon", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expectChai(wrapper.exists(".share-facebook")).to.be.true;
    expectChai(wrapper.exists(".icon-facebook")).to.be.true;
  });
  it("should have a twitter button and icon", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expectChai(wrapper.exists(".share-twitter")).to.be.true;
    expectChai(wrapper.exists(".icon-twitter")).to.be.true;
  });
  it("should have some text to send to the social media platforms", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expectChai(wrapper.state().text).to.be.not.null;
  });
  it("should have some hashtags to send to the social media platforms", () => {
    const wrapper = mount(<SocialMediaPanel url={props.url} />);
    expectChai(wrapper.state().hashtags).to.be.not.null;
    expectChai(wrapper.state().hashtags.length).to.be.greaterThan(0);
  });
  it("should have some description to send to the social media platforms", () => {
    const wrapper = mount(<SocialMediaPanel url={props.url} />);
    expectChai(wrapper.state().description).to.be.not.null;
  });
});
