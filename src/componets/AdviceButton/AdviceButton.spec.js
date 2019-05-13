import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import AdviceButton from "./AdviceButton";

Enzyme.configure({ adapter: new Adapter() });

const onClick = jest.fn();

describe("AdviceButton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AdviceButton onClick={onClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("responds to click events", () => {
    const wrapper = shallow(<AdviceButton onClick={onClick} />);
    expect(onClick.mock.calls.length).toBe(0);
    wrapper.find("button").simulate("click");
    expect(onClick.mock.calls.length).toBe(1);
  });
});
