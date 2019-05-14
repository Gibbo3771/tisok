import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import ShareModal from "./ShareModal";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { expect as expectChai } from "chai";
import ReactModal from "react-modal";

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null;

const props = {
  url: "www.google.com",
  isOpen: false
};

describe("ShareModal", () => {
  beforeEach(() => {
    mount(<div id="root" />);
    ReactModal.setAppElement(document.getElementById("root"));
    wrapper = shallow(<ShareModal isOpen={props.isOpen} url={props.url} />);
  });
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("has text to share", () => {
    expectChai(wrapper.state().text).to.equal("Advice to live by...");
  });
  it("has hashtags", () => {
    expectChai(wrapper.state().hashtags).to.be.not.null;
    expectChai(wrapper.state().hashtags.length).to.equal(2);
    expectChai(wrapper.state().hashtags[0]).to.equal("tisok");
    expectChai(wrapper.state().hashtags[1]).to.equal("lifeprotips");
  });
});
