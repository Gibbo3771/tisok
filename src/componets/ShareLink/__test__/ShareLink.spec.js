// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import ShareLink from "../ShareLink";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  slip: {
    slip_id: 1,
    advice: "some advice"
  }
};

describe("ShareLink", () => {
  it("renders correctly if it has a slip", () => {
    const { slip } = props;
    const tree = mount(<ShareLink slip={slip} />);
    expect(tree).toMatchSnapshot();
  });
});
