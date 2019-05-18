import React from "react";
import ShareLink from "../ShareLink";

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
