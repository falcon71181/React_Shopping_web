"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _icons = _interopRequireDefault(require("../icons"));

describe('<NotificationIcon/>', function () {
  it('should render the "svg" passed as icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icons["default"], {
      icon: _react["default"].createElement("svg", null)
    }));
    expect(component.find('svg').exists()).toBe(true);
  });
  it('should render the "InfoIcon" when the string "info" is passed as icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icons["default"], {
      icon: "info"
    }));
    expect(component.find('InfoIcon').exists()).toBe(true);
  });
  it('should render the "ErrorIcon" when the string "error" is passed as icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icons["default"], {
      icon: "error"
    }));
    expect(component.find('ErrorIcon').exists()).toBe(true);
  });
  it('should render the "WarningIcon" when the string "warning" is passed as icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icons["default"], {
      icon: "warning"
    }));
    expect(component.find('WarningIcon').exists()).toBe(true);
  });
  it('should render the "SuccessIcon" when the string "success" is passed as icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icons["default"], {
      icon: "success"
    }));
    expect(component.find('SuccessIcon').exists()).toBe(true);
  });
  it('should not render the "icon" when a wrong string is passed as icon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icons["default"], {
      icon: "wrong-string"
    }));
    expect(component.find('div').exists()).toBe(false);
  });
});