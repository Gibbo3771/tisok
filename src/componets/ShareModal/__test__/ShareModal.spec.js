// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import ShareModal from "../ShareModal";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import ReactModal from "react-modal";

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null;

const props = {
  url: "www.google.com",
  slip: {
    slip_id: 1,
    advice: "eat fruit"
  },
  isModalOpen: false,
  onRequestClose: sinon.spy()
};

const { url, slip, isModalOpen, onRequestClose } = props;

describe("ShareModal", () => {
  beforeEach(() => {
    mount(<div id="root" />);
    ReactModal.setAppElement(document.getElementById("root"));
  });
  it("renders correctly", () => {
    const wrapper = shallow(
      <ShareModal
        isOpen={isModalOpen}
        url={url}
        slip={slip}
        onRequestClose={onRequestClose}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("has text to share", () => {
    const wrapper = shallow(
      <ShareModal
        isOpen={isModalOpen}
        url={url}
        slip={slip}
        onRequestClose={onRequestClose}
      />
    );
    expect(wrapper.state().text).toEqual("Advice to live by...");
  });
  it("has hashtags", () => {
    const wrapper = shallow(
      <ShareModal
        isOpen={isModalOpen}
        url={url}
        slip={slip}
        onRequestClose={onRequestClose}
      />
    );
    expect(wrapper.state().hashtags).toBeDefined();
    expect(wrapper.state().hashtags.length).toEqual(2);
    expect(wrapper.state().hashtags[0]).toEqual("tisok");
    expect(wrapper.state().hashtags[1]).toEqual("lifeprotips");
  });
  xit("toggles open and closed", () => {
    const wrapper = shallow(
      <ShareModal
        isOpen={isModalOpen}
        url={url}
        slip={slip}
        onRequestClose={onRequestClose}
      />
    );
    expect(wrapper.instance().props.isOpen).toBeFalsy();
    wrapper.setProps({ isOpen: true });
    expect(wrapper.instance().props.isOpen).toBeTruthy();
  });
});
