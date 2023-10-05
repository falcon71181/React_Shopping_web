import React from 'react';
import { mount } from 'enzyme';
import FileSelector from '..';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';
describe('<FileSelector />', function () {
  it('should render an input with type file', function () {
    var component = mount(React.createElement(FileSelector, null));
    expect(component.find('input[type="file"]').length).toBe(1);
  });
  it('should set the same generated value to the label htmlFor and the input id', function () {
    var component = mount(React.createElement(FileSelector, {
      label: "label"
    }));
    var labelId = component.find('label').prop('htmlFor');
    var inputId = component.find('input').prop('id');
    expect(labelId).toBe(inputId);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = mount(React.createElement(FileSelector, {
      tabIndex: "0"
    }));
    expect(component.find('input').prop('tabIndex')).toBe('0');
  });
  it('should set disabled in the input element if it is passed', function () {
    var component = mount(React.createElement(FileSelector, {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set required in the input element if it is passed', function () {
    var component = mount(React.createElement(FileSelector, {
      required: true
    }));
    expect(component.find('input').prop('required')).toBe(true);
  });
  it('should pass a generated id to the error element and set the same id to the aria-describedby for the input when a error is passed', function () {
    var component = mount(React.createElement(FileSelector, {
      error: "error message"
    }));
    var errorId = component.find(ErrorText).prop('id');
    var describedBy = component.find('input').prop('aria-describedby');
    expect(errorId).toBe(describedBy);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(FileSelector, {
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
  it('should render HelpText when bottomHelpText is passed', function () {
    var component = mount(React.createElement(FileSelector, {
      bottomHelpText: "help text"
    }));
    expect(component.find(HelpText).exists()).toBe(true);
  });
  it('should fire change event when a file is picked', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(FileSelector, {
      label: "custom label",
      onChange: onChangeMockFn
    }));
    var input = component.find('input');
    input.simulate('change');
    expect(onChangeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire focus event', function () {
    var onFocusMockFn = jest.fn();
    var component = mount(React.createElement(FileSelector, {
      label: "custom label",
      onFocus: onFocusMockFn
    }));
    var input = component.find('input');
    input.simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire blur event', function () {
    var onBlurMockFn = jest.fn();
    var component = mount(React.createElement(FileSelector, {
      label: "custom label",
      onBlur: onBlurMockFn
    }));
    var input = component.find('input');
    input.simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledTimes(1);
  });
});