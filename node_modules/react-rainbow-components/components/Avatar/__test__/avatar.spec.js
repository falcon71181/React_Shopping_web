"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<Avatar/>', function () {
  it('should pass assistiveText to the prop text of AssistiveText component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      initials: "JD",
      assistiveText: "for screen readers"
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
  });
});