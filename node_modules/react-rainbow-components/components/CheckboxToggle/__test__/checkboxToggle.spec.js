"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<CheckboxToggle/>', function () {
  it('should set type checkbox to the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find('input').prop('type')).toBe('checkbox');
  });
  it('should pass a generated id to the span element and set the same id to the name, the value and the aria-describedby for the input element if no name is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find('.rainbow-checkbox-toggle_faux-container').prop('id')).toMatch(/checkbox-toggle/);
    expect(component.find('input').prop('name')).toMatch(/checkbox-toggle/);
    expect(component.find('input').prop('value')).toMatch(/checkbox-toggle/);
    expect(component.find('input').prop('aria-describedby')).toMatch(/checkbox-toggle/);
  });
  it('should pass the name to the span element and set the same id to the name, the value and the aria-describedby for the input element if name is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "fruit-checkbox-toggle"
    }));
    expect(component.find('.rainbow-checkbox-toggle_faux-container').prop('id')).toBe('fruit-checkbox-toggle');
    expect(component.find('input').prop('name')).toBe('fruit-checkbox-toggle');
    expect(component.find('input').prop('value')).toBe('fruit-checkbox-toggle');
    expect(component.find('input').prop('aria-describedby')).toBe('fruit-checkbox-toggle');
  });
  it('should set the value passed to the checked prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: true
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should fire an event when the user click the checkbox', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the disabled passed to the disabled prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
});