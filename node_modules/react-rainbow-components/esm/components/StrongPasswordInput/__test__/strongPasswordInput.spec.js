import React from 'react';
import { mount } from 'enzyme';
import StrongPasswordInput from '../index';
import StyledInput from '../styled/input';
import ErrorText from '../../Input/styled/errorText';
describe('<StrongPasswordInput />', function () {
  it('should set an id in the input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, null));
    expect(component.find('input').prop('id')).toMatch(/input/);
  });
  it('should set the value passed in the input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      value: "Input value"
    }));
    expect(component.find('input').prop('value')).toBe('Input value');
  });
  it('should set the placeholder passed in the input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      placeholder: "Placeholder Text"
    }));
    expect(component.find('input').prop('placeholder')).toBe('Placeholder Text');
  });
  it('should fire an event when the user change the input', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(StrongPasswordInput, {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      tabIndex: 0
    }));
    expect(component.find('input').prop('tabIndex')).toBe(0);
  });
  it('should set the disabled passed in the input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set the readonly passed in the input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      readOnly: true
    }));
    expect(component.find('input').prop('readOnly')).toBe(true);
  });
  it('should set required in the input element if it is passed', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      required: true
    }));
    expect(component.find('input').prop('required')).toBe(true);
  });
  it('should set the maxLength passed in the Input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      maxLength: 0
    }));
    expect(component.find('input').prop('maxLength')).toBe(0);
  });
  it('should set the minLength passed in the Input element', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      minLength: 0
    }));
    expect(component.find('input').prop('minLength')).toBe(0);
  });
  it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the input when a bottomHelpText is passed', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      label: "custom label"
    }));
    expect(component.find('Label').prop('id')).toMatch(/label/);
    expect(component.find('input').prop('aria-labelledby')).toMatch(/label/);
  });
  it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      error: "error message"
    }));
    expect(component.find(ErrorText).prop('id')).toMatch(/error-message/);
    expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(StrongPasswordInput, {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      inputId: expect.any(String),
      id: expect.any(String),
      variant: 'default',
      size: 'medium'
    });
  });
  it('should render an Input with type `password`', function () {
    var component = mount(React.createElement(StrongPasswordInput, null));
    expect(component.find(StyledInput).length).toBe(1);
  });
});