"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<DatePicker/>', function () {
  it('should be focusable', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "DatePicker Label"
    }));
    expect(component).toBeFocusable();
  });
});