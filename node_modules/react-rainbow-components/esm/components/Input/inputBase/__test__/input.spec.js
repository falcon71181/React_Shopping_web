import React from 'react';
import { mount } from 'enzyme';
import InputBase from '..';
import StyledError from '../../styled/errorText';
describe('<InputBase/>', function () {
  it('should set an id in the input element', function () {
    var component = mount(React.createElement(InputBase, null));
    expect(component.find('input').prop('id')).toMatch(/input/);
  });
  it('should set the type passed in the input element', function () {
    var component = mount(React.createElement(InputBase, {
      type: "color"
    }));
    expect(component.find('input').prop('type')).toBe('color');
  });
  it('should set the value passed in the input element', function () {
    var component = mount(React.createElement(InputBase, {
      value: "Input value"
    }));
    expect(component.find('input').prop('value')).toBe('Input value');
  });
  it('should set the placeholder passed in the input element', function () {
    var component = mount(React.createElement(InputBase, {
      placeholder: "Placeholder Text"
    }));
    expect(component.find('input').prop('placeholder')).toBe('Placeholder Text');
  });
  it('should fire an event when the user change the input', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(InputBase, {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = mount(React.createElement(InputBase, {
      tabIndex: 0
    }));
    expect(component.find('input').prop('tabIndex')).toBe(0);
  });
  it('should set the disabled passed in the input element', function () {
    var component = mount(React.createElement(InputBase, {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set the readonly passed in the input element', function () {
    var component = mount(React.createElement(InputBase, {
      readOnly: true
    }));
    expect(component.find('input').prop('readOnly')).toBe(true);
  });
  it('should set required in the input element if it is passed', function () {
    var component = mount(React.createElement(InputBase, {
      required: true
    }));
    expect(component.find('input').prop('required')).toBe(true);
  });
  it('should set the max passed in the Input element', function () {
    var component = mount(React.createElement(InputBase, {
      max: 5
    }));
    expect(component.find('input').prop('max')).toBe(5);
  });
  it('should set the min passed in the Input element', function () {
    var component = mount(React.createElement(InputBase, {
      min: 1
    }));
    expect(component.find('input').prop('min')).toBe(1);
  });
  it('should set the maxLength passed in the Input element', function () {
    var component = mount(React.createElement(InputBase, {
      maxLength: 0
    }));
    expect(component.find('input').prop('maxLength')).toBe(0);
  });
  it('should set the minLength passed in the Input element', function () {
    var component = mount(React.createElement(InputBase, {
      minLength: 0
    }));
    expect(component.find('input').prop('minLength')).toBe(0);
  });
  it('should set the pattern passed in the Input element', function () {
    var component = mount(React.createElement(InputBase, {
      pattern: "Input Pattern"
    }));
    expect(component.find('input').prop('pattern')).toBe('Input Pattern');
  });
  it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the input when a bottomHelpText is passed', function () {
    var component = mount(React.createElement(InputBase, {
      bottomHelpText: "Help text"
    }));
    expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
    expect(component.find('input').prop('aria-labelledby')).toMatch(/inline-text-label/);
  });
  it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', function () {
    var component = mount(React.createElement(InputBase, {
      error: "error message"
    }));
    expect(component.find(StyledError).prop('id')).toMatch(/error-message/);
    expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(InputBase, {
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
      variant: 'default',
      size: 'medium'
    });
  });
  it('should toggle the password visibility', function () {
    var component = mount(React.createElement(InputBase, {
      type: "password"
    }));
    expect(component.find('input').prop('type')).toBe('password');
    component.find('button').simulate('click');
    expect(component.find('input').prop('type')).toBe('text');
    component.find('button').simulate('click');
    expect(component.find('input').prop('type')).toBe('password');
  });
});