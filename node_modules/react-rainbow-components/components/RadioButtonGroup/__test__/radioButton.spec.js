"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _radioButtonItem = _interopRequireDefault(require("../radioButtonItem"));

describe('<RadioButton />', function () {
  it('should set type radio to the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], null));
    expect(component.find('input').prop('type')).toBe('radio');
  });
  it('should pass a generated id to the input element and set the same id to the htmFor of the label element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], null));
    expect(component.find('input').prop('id')).toMatch(/radiobutton/);
    expect(component.find('label').prop('htmlFor')).toMatch(/radiobutton/);
  });
  it('should set the name passed to the name prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], {
      name: "name-1"
    }));
    expect(component.find('input').prop('name')).toBe('name-1');
  });
  it('should set the value passed to the value prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], {
      value: "value-1"
    }));
    expect(component.find('input').prop('value')).toBe('value-1');
  });
  it('should set the isChecked passed to the checked prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], {
      isChecked: true
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should set the value ariaDescribedby to the ariaDescribedby prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], {
      ariaDescribedby: "error-1"
    }));
    expect(component.find('input').prop('aria-describedby')).toBe('error-1');
  });
  it('should fire an event when the user click the radio', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the disabled passed to the disabled prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_radioButtonItem["default"], {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
});