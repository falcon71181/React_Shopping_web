import React from 'react';
import { mount } from 'enzyme';
import RatingItems from '../ratingItems';
describe('<RatingItems />', function () {
  it('should pass the right props to the Star component', function () {
    var component = mount(React.createElement(RatingItems, {
      value: "1",
      name: "name-1",
      onChange: function onChange() {}
    }));
    expect(component.childAt(0).props()).toEqual({
      value: 1,
      name: 'name-1',
      onChange: expect.any(Function),
      isFilled: true,
      isHalf: false,
      readOnly: false,
      required: false
    });
  });
  it('should render the right amount of Star components', function () {
    var component = mount(React.createElement(RatingItems, null));
    expect(component.children().length).toBe(5);
  });
  it('should set isHalf to true when the value passed is not integer and readOnly is true', function () {
    var component = mount(React.createElement(RatingItems, {
      value: "3.5",
      readOnly: true
    }));
    var star = component.childAt(3);
    expect(star.props().isHalf).toBe(true);
  });
  it('should set isHalf to false when readOnly is false', function () {
    var component = mount(React.createElement(RatingItems, {
      value: "3.5"
    }));
    var star = component.childAt(3);
    expect(star.props().isHalf).toBe(false);
  });
  it('should pass the right isFilled when the value passed is float', function () {
    var component = mount(React.createElement(RatingItems, {
      value: "3.5"
    }));
    var star = component.childAt(3);
    expect(star.props().isFilled).toBe(true);
  });
});