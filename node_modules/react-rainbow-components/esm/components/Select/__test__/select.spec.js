import React from 'react';
import { mount } from 'enzyme';
import Select from '../index';
describe('Select component', function () {
  it('should set an id in the select element', function () {
    var component = mount(React.createElement(Select, null));
    expect(component.find('select').prop('id')).toMatch(/select/);
  });
  it('should set the value passed in the select element', function () {
    var component = mount(React.createElement(Select, {
      value: "Select value"
    }));
    expect(component.find('select').prop('value')).toBe('Select value');
  });
  it('should fire an event when the user selects an option', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(Select, {
      onChange: onChangeFn
    }));
    component.find('select').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the disabled passed in the select element', function () {
    var component = mount(React.createElement(Select, {
      disabled: true
    }));
    expect(component.find('select').prop('disabled')).toBe(true);
  });
  it('should set the required passed in the select element when it is passed', function () {
    var component = mount(React.createElement(Select, {
      required: true
    }));
    expect(component.find('select').prop('required')).toBe(true);
  });
  it('should set the required prop passed in the RequiredAsterisk component', function () {
    var component = mount(React.createElement(Select, {
      label: "Select Label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(Select, {
      label: "Select Label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'Select Label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      inputId: expect.any(String),
      variant: 'default',
      size: 'medium'
    });
  });
});