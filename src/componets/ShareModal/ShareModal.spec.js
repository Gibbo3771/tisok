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
  facebookQuote: "facebook is bad mkay",
  facebookHashtag: "#sometag",
  twitterTitle: "twitter is too political",
  twitterHashtags: ["#tag1", "#tag2"]
};

describe("ShareModal", () => {
  beforeEach(() => {
    mount(<div id="root" />);
    ReactModal.setAppElement(document.getElementById("root"));
    wrapper = shallow(
      <ShareModal
        isOpen={false}
        url={props.url}
        facebookQuote={props.facebookQuote}
        facebookHashtag={props.facebookHashtag}
        twitterTitle={props.twitterTitle}
        twitterHashtags={props.twitterHashtags}
      />
    );
  });
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("has facebook share props", () => {
    expectChai(wrapper.instance().props.facebookQuote).to.equal(
      "facebook is bad mkay"
    );
    expectChai(wrapper.instance().props.facebookHashtag).to.equal("#sometag");
  });
  it("has twitter share props", () => {
    expectChai(wrapper.instance().props.twitterTitle).to.equal(
      "twitter is too political"
    );
    expectChai(wrapper.instance().props.twitterHashtags.length).to.equal(2);
  });
});
