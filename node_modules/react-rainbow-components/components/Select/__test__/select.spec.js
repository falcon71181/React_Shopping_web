"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('Select component', function () {
  it('should set an id in the select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find('select').prop('id')).toMatch(/select/);
  });
  it('should set the value passed in the select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: "Select value"
    }));
    expect(component.find('select').prop('value')).toBe('Select value');
  });
  it('should fire an event when the user selects an option', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn
    }));
    component.find('select').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the disabled passed in the select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      disabled: true
    }));
    expect(component.find('select').prop('disabled')).toBe(true);
  });
  it('should set the required passed in the select element when it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      required: true
    }));
    expect(component.find('select').prop('required')).toBe(true);
  });
  it('should set the required prop passed in the RequiredAsterisk component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "Select Label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
  });
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
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