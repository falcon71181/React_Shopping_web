import React from 'react';
import { mount } from 'enzyme';
import NavigationButton from '../navigationButton';
describe('<NavigationButton />', function () {
  it('should call the onClick function when clicked', function () {
    var onCkickMockFn = jest.fn();
    var component = mount(React.createElement(NavigationButton, {
      onClick: onCkickMockFn,
      icon: React.createElement("span", null)
    }));
    var button = component.find('button');
    button.simulate('click');
    expect(onCkickMockFn).toHaveBeenCalledTimes(1);
  });
  it('should not call the onClick function when clicked if disabled', function () {
    var onCkickMockFn = jest.fn();
    var component = mount(React.createElement(NavigationButton, {
      onClick: onCkickMockFn,
      icon: React.createElement("span", null),
      disabled: true
    }));
    var button = component.find('button');
    button.simulate('click');
    expect(onCkickMockFn).toHaveBeenCalledTimes(0);
  });
  it('should set the aria-disabled to the button element if disabled', function () {
    var onCkickMockFn = jest.fn();
    var component = mount(React.createElement(NavigationButton, {
      onClick: onCkickMockFn,
      icon: React.createElement("span", null),
      disabled: true
    }));
    var button = component.find('button');
    expect(button.prop('aria-disabled')).toBe(true);
  });
});