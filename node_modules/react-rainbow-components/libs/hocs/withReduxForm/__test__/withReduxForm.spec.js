"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function Input() {
  return _react["default"].createElement("input", null);
}

var InputComponent = (0, _["default"])(Input);
describe('withReduxForm', function () {
  it('should render an input element with the right props', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(InputComponent, {
      error: "my error",
      value: "some text",
      type: "email"
    }));
    expect(component.find('Input').props()).toEqual({
      error: 'my error',
      value: 'some text',
      type: 'email'
    });
  });
  it('should render an input element with the right props when redux form input and meta objects are passed', function () {
    var input = {
      value: 'redux form value',
      onChange: function onChange() {}
    };
    var meta = {
      error: 'redux form error from meta',
      pristine: true,
      valid: false
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(InputComponent, {
      input: input,
      meta: meta,
      error: "my error",
      value: "some text",
      type: "email"
    }));
    expect(component.find('Input').props()).toEqual({
      error: 'my error',
      onChange: expect.any(Function),
      type: 'email',
      value: 'redux form value'
    });
  });
  it('should pass the right error when redux form meta object is passed but touched and submitFailed are false', function () {
    var meta = {
      error: 'redux form error from meta',
      touched: false,
      submitFailed: false
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(InputComponent, {
      meta: meta,
      error: "my error"
    }));
    expect(component.find('Input').prop('error')).toBe('my error');
  });
  it('should pass the right error when redux form meta object is passed and touched is true', function () {
    var meta = {
      error: 'redux form error from meta',
      touched: true,
      submitFailed: false
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(InputComponent, {
      meta: meta,
      error: "my error"
    }));
    expect(component.find('Input').prop('error')).toBe('redux form error from meta');
  });
  it('should pass the right error when redux form meta object is passed and submitFailed is true', function () {
    var meta = {
      error: 'redux form error from meta',
      touched: false,
      submitFailed: true
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(InputComponent, {
      meta: meta,
      error: "my error"
    }));
    expect(component.find('Input').prop('error')).toBe('redux form error from meta');
  });
});