import Enzyme, { shallow, render, mount } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// enzyme globals
global.shallow = shallow;
global.render = render;
global.mount = mount;

// sinon globals
global.sinon = sinon;
