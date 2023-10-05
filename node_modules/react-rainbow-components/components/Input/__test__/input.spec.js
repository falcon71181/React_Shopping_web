"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<Input/>', function () {
  it('should return the InputRadio component when type radio is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      type: "radio"
    }));
    expect(component.find('InputRadio').exists()).toBe(true);
  });
  it('should return the InputCheckbox component when type checkbox is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      type: "checkbox"
    }));
    expect(component.find('InputCheckbox').exists()).toBe(true);
  });
  it('should return the InputBase component when type radio or checkbox are not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find('InputBase').exists()).toBe(true);
  });
});