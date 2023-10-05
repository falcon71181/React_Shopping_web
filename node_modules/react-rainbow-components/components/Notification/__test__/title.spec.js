"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _title = _interopRequireDefault(require("../title"));

describe('<NotificationTitle/>', function () {
  it('should render the string passed as text in the tag "h1"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_title["default"], {
      text: "test-title"
    }));
    expect(component.find('h1').text()).toBe('test-title');
  });
  it('should render the "title" passed as text', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_title["default"], {
      text: _react["default"].createElement("title", null)
    }));
    expect(component.find('title').exists()).toBe(true);
  });
});