"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _helpText = _interopRequireDefault(require("../../Input/styled/helpText"));

describe('<FileSelector />', function () {
  it('should render an input with type file', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find('input[type="file"]').length).toBe(1);
  });
  it('should set the same generated value to the label htmlFor and the input id', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "label"
    }));
    var labelId = component.find('label').prop('htmlFor');
    var inputId = component.find('input').prop('id');
    expect(labelId).toBe(inputId);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      tabIndex: "0"
    }));
    expect(component.find('input').prop('tabIndex')).toBe('0');
  });
  it('should set disabled in the input element if it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should set required in the input element if it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      required: true
    }));
    expect(component.find('input').prop('required')).toBe(true);
  });
  it('should pass a generated id to the error element and set the same id to the aria-describedby for the input when a error is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      error: "error message"
    }));
    var errorId = component.find(_errorText["default"]).prop('id');
    var describedBy = component.find('input').prop('aria-describedby');
    expect(errorId).toBe(describedBy);
  });
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      bottomHelpText: "help text"
    }));
    expect(component.find(_helpText["default"]).exists()).toBe(true);
  });
  it('should fire change event when a file is picked', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "custom label",
      onChange: onChangeMockFn
    }));
    var input = component.find('input');
    input.simulate('change');
    expect(onChangeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire focus event', function () {
    var onFocusMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "custom label",
      onFocus: onFocusMockFn
    }));
    var input = component.find('input');
    input.simulate('focus');
    expect(onFocusMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire blur event', function () {
    var onBlurMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "custom label",
      onBlur: onBlurMockFn
    }));
    var input = component.find('input');
    input.simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledTimes(1);
  });
});