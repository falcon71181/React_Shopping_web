import React from 'react';
import { mount } from 'enzyme';
import Input from '..';
import StyledPickerInput from '../styled/input';
import StyledReadonlyInput from '../../inputBase/styled/input';
import ErrorText from '../../styled/errorText';
describe('<PickerInput/>', function () {
  it('should set an id in the input element', function () {
    var component = mount(React.createElement(Input, null));
    expect(component.find('input').prop('id')).toMatch(/input/);
  });
  it('should set the type passed in the input element', function () {
    var component = mount(React.createElement(Input, {
      type: "color"
    }));
    expect(component.find('input').prop('type')).toBe('color');
  });
  it('should set the value passed in the input element', function () {
    var component = mount(React.createElement(Input, {
      value: "Input value"
    }));
    expect(component.find('input').prop('value')).toBe('Input value');
  });
  it('should set the placeholder passed in the input element', function () {
    var component = mount(React.createElement(Input, {
      placeholder: "Placeholder Text"
    }));
    expect(component.find('input').prop('placeholder')).toBe('Placeholder Text');
  });
  it('should fire an event when the user change the input', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(Input, {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = mount(React.createElement(Input, {
      tabIndex: 0
    }));
    expect(component.find('input').prop('tabIndex')).toBe(0);
  });
  it('should set the disabled passed in the input element', function () {
    var component = mount(React.createElement(Input, {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set the readonly passed in the input element', function () {
    var component = mount(React.createElement(Input, {
      readOnly: true
    }));
    expect(component.find('input').prop('readOnly')).toBe(true);
  });
  it('should set required in the input element if it is passed', function () {
    var component = mount(React.createElement(Input, {
      required: true
    }));
    expect(component.find('input').prop('required')).toBe(true);
  });
  it('should set the maxLength passed in the Input element', function () {
    var component = mount(React.createElement(Input, {
      maxLength: 0
    }));
    expect(component.find('input').prop('maxLength')).toBe(0);
  });
  it('should set the minLength passed in the Input element', function () {
    var component = mount(React.createElement(Input, {
      minLength: 0
    }));
    expect(component.find('input').prop('minLength')).toBe(0);
  });
  it('should set the pattern passed in the Input element', function () {
    var component = mount(React.createElement(Input, {
      pattern: "Input Pattern"
    }));
    expect(component.find('input').prop('pattern')).toBe('Input Pattern');
  });
  it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the input when a bottomHelpText is passed', function () {
    var component = mount(React.createElement(Input, {
      bottomHelpText: "Help text"
    }));
    expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
    expect(component.find('input').prop('aria-labelledby')).toMatch(/inline-text-label/);
  });
  it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', function () {
    var component = mount(React.createElement(Input, {
      error: "error message"
    }));
    expect(component.find(ErrorText).prop('id')).toMatch(/error-message/);
    expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(Input, {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      hideLabel: false,
      labelAlignment: 'center',
      inputId: expect.any(String),
      variant: 'default',
      size: 'medium'
    });
  });
  it('should render StyledPickerInput when readOnly is not passed', function () {
    var component = mount(React.createElement(Input, {
      label: "Input label"
    }));
    expect(component.find(StyledPickerInput).exists()).toBe(true);
  });
  it('should render StyledReadonlyInput when readOnly is passed', function () {
    var component = mount(React.createElement(Input, {
      label: "Input label",
      readOnly: true
    }));
    expect(component.find(StyledReadonlyInput).exists()).toBe(true);
  });
});