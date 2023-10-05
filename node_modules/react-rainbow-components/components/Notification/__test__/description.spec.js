"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _description = _interopRequireDefault(require("../description"));

describe('<NotificationDescription/>', function () {
  it('should render the string passed as text in the tag "p"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_description["default"], {
      text: "test-description"
    }));
    expect(component.find('p').text()).toBe('test-description');
  });
  it('should render the "span" passed as text', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_description["default"], {
      text: _react["default"].createElement("span", null)
    }));
    expect(component.find('span').exists()).toBe(true);
  });
});