import React from "react";
import SocialMediaPanel from "../SocialMediaPanel";

const props = {
  url: "www.google.com"
};

describe("SocialMediaPanel", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<SocialMediaPanel url={props.url} />);
  });
  it("has can be found by id", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expect(wrapper.exists("#social-media-panel")).toBeDefined();
  });
  xit("should have a facebook button and icon", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expect(wrapper.exists(".share-facebook")).toBeTruthy();
    expect(wrapper.exists(".icon-facebook")).toBeTruthy();
  });
  it("should have a twitter button and icon", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expect(wrapper.exists(".share-twitter")).toBeTruthy();
    expect(wrapper.exists(".icon-twitter")).toBeTruthy();
  });
  it("should have some text to send to the social media platforms", () => {
    const wrapper = shallow(<SocialMediaPanel url={props.url} />);
    expect(wrapper.state().text).toBeDefined();
  });
  it("should have some hashtags to send to the social media platforms", () => {
    const wrapper = mount(<SocialMediaPanel url={props.url} />);
    expect(wrapper.state().hashtags).toBeDefined();
    expect(wrapper.state().hashtags.length).toBeGreaterThan(0);
  });
  it("should have some description to send to the social media platforms", () => {
    const wrapper = mount(<SocialMediaPanel url={props.url} />);
    expect(wrapper.state().description).toBeDefined();
  });
});
