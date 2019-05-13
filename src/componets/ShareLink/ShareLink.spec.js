import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import ShareLink from "./ShareLink";
import sinon from "sinon";
import { expect as expectChai } from "chai";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  slip: {
    slip_id: null,
    advice: null
  }
};

describe("ShareLink", () => {
  it("renders correctly if it has a slip", () => {
    const { slip } = props;
    const tree = shallow(<ShareLink slip={slip} />);
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly if it has no slip", () => {
    const tree = shallow(<ShareLink />);
    expect(tree).toMatchSnapshot();
  });
});
