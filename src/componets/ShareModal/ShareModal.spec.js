import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import ShareModal from "./ShareModal";
import { shallow } from "enzyme";
import sinon from "sinon";
import { expect as expectChai } from "chai";

Enzyme.configure({ adapter: new Adapter() });

describe("ShareModal", () => {
  describe("open and close", () => {
    let wrapper = null;
    beforeAll(() => {
      wrapper = shallow(<ShareModal isOpen={false} />);
    });
    it("starts off closed", () => {
      expectChai(wrapper.instance().props.isOpen).to.equal(false);
    });
    it("can be toggled opened", () => {
      wrapper.setProps({ isOpen: true });
      expectChai(wrapper.instance().props.isOpen).to.equal(true);
    });
    it("can be toggled closed", () => {
      wrapper.setProps({ isOpen: false });
      expectChai(wrapper.instance().props.isOpen).to.equal(false);
    });
  });

  //   it("can be toggled open", () => {
  //     const wrapper = shallow(<ShareModal />);
  //     expectChai(wrapper.find("#modal")).to.be.not.undefined;
  //   });
});
