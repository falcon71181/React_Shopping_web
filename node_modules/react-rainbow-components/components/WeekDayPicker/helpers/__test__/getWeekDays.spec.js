"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getWeekDays = _interopRequireDefault(require("../getWeekDays"));

describe('getWeekDays', function () {
  it('should return the weekDays values available for selection', function () {
    expect((0, _getWeekDays["default"])()).toEqual(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
  });
});