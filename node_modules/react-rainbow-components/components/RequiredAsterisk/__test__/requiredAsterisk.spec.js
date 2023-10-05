"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _styledAsterisk = _interopRequireDefault(require("../styledAsterisk"));

describe('<InputRequiredAsterisk/>', function () {
  it('should render the abbr element when is required', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      required: true
    }));
    expect(component.find('abbr').exists()).toBe(true);
  });
  it('should set the title prop as required in the abbr element when is required', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      required: true
    }));
    var asterisk = component.find(_styledAsterisk["default"]);
    expect(asterisk.prop('title')).toBe('required');
  });
});