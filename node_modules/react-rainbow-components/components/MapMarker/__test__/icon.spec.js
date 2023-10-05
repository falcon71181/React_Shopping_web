"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _icon = _interopRequireDefault(require("../icon"));

var _icon2 = _interopRequireDefault(require("../styled/icon"));

describe('<Icon/>', function () {
  it('should return the icon passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], {
      icon: _react["default"].createElement("svg", {
        "data-id": "custom-icon"
      })
    }));
    expect(component.find('svg[data-id="custom-icon"]').exists()).toBe(true);
  });
  it('should render the fallback icon when no icon is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], null));
    expect(component.find('MarkerIcon').exists()).toBe(true);
  });
  it('should set the same text as title in span element and text in AssistiveText when no icon is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_icon["default"], null));
    expect(component.find(_icon2["default"]).prop('title')).toBe('marker icon');
    expect(component.find('AssistiveText').prop('text')).toBe('marker icon');
  });
});