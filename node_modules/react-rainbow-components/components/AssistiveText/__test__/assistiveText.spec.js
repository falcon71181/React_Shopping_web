"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<AssistiveText/>', function () {
  it('should render the span element when the text is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      text: "for screen readers"
    }));
    expect(component.find('span').exists()).toBe(true);
  });
  it('should render the text passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      text: "for screen readers"
    }));
    expect(component.text()).toBe('for screen readers');
  });
});