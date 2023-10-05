"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _header = _interopRequireDefault(require("../header"));

describe('<Header/>', function () {
  it('should set the content passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_header["default"], {
      content: "my title"
    }));
    expect(component.find('h1').text()).toBe('my title');
  });
  it('should render the content passed if is not a string', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_header["default"], {
      content: _react["default"].createElement("p", null, "my title")
    }));
    expect(component.find('p').text()).toBe('my title');
  });
});