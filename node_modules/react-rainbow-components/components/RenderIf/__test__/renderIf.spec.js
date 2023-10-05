"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<RenderIf/>', function () {
  it('should not render the children when isTrue is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement("svg", null)));
    expect(component.find('svg').exists()).toBe(false);
  });
  it('should render the children when isTrue is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isTrue: true
    }, _react["default"].createElement("svg", null)));
    expect(component.find('svg').exists()).toBe(true);
  });
});