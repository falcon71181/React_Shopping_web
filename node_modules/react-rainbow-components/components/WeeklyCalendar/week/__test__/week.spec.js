"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var week = new Date(2020, 3, 5);
describe('<Week />', function () {
  it('should render the 7 days of the week', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      week: week
    }));
    expect(wrapper.find('Days').children().length).toBe(7);
  });
  it('should render the 24 hours of the day', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      week: week
    }));
    expect(wrapper.find('GridLines').children().length).toBe(24);
  });
});