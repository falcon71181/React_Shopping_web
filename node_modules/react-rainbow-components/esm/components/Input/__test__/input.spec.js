import React from 'react';
import { mount } from 'enzyme';
import Input from '..';
describe('<Input/>', function () {
  it('should return the InputRadio component when type radio is passed', function () {
    var component = mount(React.createElement(Input, {
      type: "radio"
    }));
    expect(component.find('InputRadio').exists()).toBe(true);
  });
  it('should return the InputCheckbox component when type checkbox is passed', function () {
    var component = mount(React.createElement(Input, {
      type: "checkbox"
    }));
    expect(component.find('InputCheckbox').exists()).toBe(true);
  });
  it('should return the InputBase component when type radio or checkbox are not passed', function () {
    var component = mount(React.createElement(Input, null));
    expect(component.find('InputBase').exists()).toBe(true);
  });
});