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
  slip: {
    slip_id: 1,
    advice: "eat fruit"
  },
  isModalOpen: false,
  onRequestClose: sinon.spy()
};

describe("ShareModal", () => {
  beforeEach(() => {
    const { url, slip, isModalOpen, onRequestClose } = props;
    mount(<div id="root" />);
    ReactModal.setAppElement(document.getElementById("root"));
    wrapper = shallow(
      <ShareModal
        isOpen={isModalOpen}
        url={url}
        slip={slip}
        onRequestClose={onRequestClose}
      />
    );
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
  xit("toggles open and closed", () => {
    expectChai(wrapper.instance().props.isOpen).to.be.false;
    wrapper.setProps({ isOpen: true });
    expectChai(wrapper.instance().props.isOpen).to.be.true;
  });
});
