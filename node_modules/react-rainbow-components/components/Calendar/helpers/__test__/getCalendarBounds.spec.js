"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getCalendarBounds = _interopRequireDefault(require("../getCalendarBounds"));

var minDate = new Date(2018, 0, 1);
var maxDate = new Date(2020, 7, 3);
var today = new Date();
var date1 = new Date(today.getFullYear() - 100, 0, 1);
var date2 = new Date(today.getFullYear() + 100, 11, 31);
describe('getCalendarBounds', function () {
  it('should return the right bounds when minDate and maxDate are not set', function () {
    var result = {
      minCalendarDate: date1,
      maxCalendarDate: date2
    };
    expect((0, _getCalendarBounds["default"])(undefined, undefined)).toEqual(result);
    expect((0, _getCalendarBounds["default"])(null, null)).toEqual(result);
  });
  it('should return the right bounds when minDate is set', function () {
    var result = {
      minCalendarDate: minDate,
      maxCalendarDate: date2
    };
    expect((0, _getCalendarBounds["default"])(minDate, undefined)).toEqual(result);
  });
  it('should return the right bounds when maxDate is set', function () {
    var result = {
      minCalendarDate: date1,
      maxCalendarDate: maxDate
    };
    expect((0, _getCalendarBounds["default"])(undefined, maxDate)).toEqual(result);
  });
  it('should return the right bounds when minDate and maxDate are set', function () {
    var result = {
      minCalendarDate: minDate,
      maxCalendarDate: maxDate
    };
    expect((0, _getCalendarBounds["default"])(minDate, maxDate)).toEqual(result);
  });
});