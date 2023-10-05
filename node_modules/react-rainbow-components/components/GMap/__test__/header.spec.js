"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _header = _interopRequireDefault(require("../header"));

describe('<Header/>', function () {
  it('should render the text passed inside an h2 element when is a string', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_header["default"], {
      text: "some title"
    }));
    expect(component.find('h2').text()).toBe('some title');
  });
  it('should return the same text passed when it is not a string', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_header["default"], {
      text: _react["default"].createElement("span", null, "some text")
    }));
    expect(component.find('span').text()).toBe('some text');
  });
});