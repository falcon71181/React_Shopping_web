"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<Spinner/>', function () {
  it('should not render the spinner when isVisible is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isVisible: false
    }));
    expect(component.children().length).toBe(0);
  });
  it('should not render the spinner when isVisible is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isVisible: true
    }));
    expect(component.children().length).toBe(1);
  });
  it('should pass assistiveText to the prop text of AssistiveText component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      assistiveText: "for screen readers"
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
  });
});