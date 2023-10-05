import React from 'react';
import { mount } from 'enzyme';
import Options from '../options';
var options = [{
  value: 'option 1',
  label: 'option 1'
}, {
  value: 'option 2',
  label: 'option 2'
}, {
  value: 'option 3',
  label: 'option 3'
}];
describe('<SelectOptions />', function () {
  it('should return the right amount of option items', function () {
    var component = mount(React.createElement(Options, {
      options: options
    }));
    expect(component.children().length).toBe(3);
  });
  it('should pass the right props to option element', function () {
    var singleOption = [{
      value: 'option-1',
      label: 'option 1',
      disabled: false
    }];
    var component = mount(React.createElement(Options, {
      options: singleOption
    }));
    expect(component.find('option').props()).toEqual({
      children: 'option 1',
      disabled: false,
      value: 'option-1'
    });
  });
});