"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _weekDayItems = _interopRequireDefault(require("../weekDayItems"));

var _weekDay = _interopRequireDefault(require("../weekDay"));

describe('<WeekDayItems />', function () {
  it('should render all the weekDay elements', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDayItems["default"], null));
    expect(component.find(_weekDay["default"]).length).toBe(7);
  });
  it('should have keys assignation using week-day and input index', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_weekDayItems["default"], null));
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    days.forEach(function (day, index) {
      expect(component.find(_weekDay["default"]).at(index).key()).toBe(day);
    });
  });
});