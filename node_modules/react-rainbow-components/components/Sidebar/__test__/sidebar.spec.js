"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<Sidebar>', function () {
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("p", null, "Test Child")));
    expect(component.find('p').text()).toBe('Test Child');
  });
  it('should set the ariaLabel passed as aria-label in the nav element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      ariaLabel: "my label"
    }));
    expect(component.find('nav').prop('aria-label')).toBe('my label');
  });
});