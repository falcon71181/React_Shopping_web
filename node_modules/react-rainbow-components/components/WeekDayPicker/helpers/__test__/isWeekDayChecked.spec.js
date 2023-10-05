"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isWeekDayChecked = _interopRequireDefault(require("../isWeekDayChecked"));

describe('isWeekDayChecked', function () {
  it('should return true if multiple is false and previous value is the same as weekDay selected value', function () {
    var isMultiple = false;
    var weekDaySelection = 'sunday';
    var prevValue = 'sunday';
    expect((0, _isWeekDayChecked["default"])(weekDaySelection, prevValue, isMultiple)).toBe(true);
  });
  it('should return false if multiple is false and previous value is NOT the same as weekDay selected value', function () {
    var isMultiple = false;
    var weekDaySelection = 'sunday';
    var prevValue = 'monday';
    expect((0, _isWeekDayChecked["default"])(weekDaySelection, prevValue, isMultiple)).toBe(false);
  });
  it('should return false if multiple is true and previous value is not an array of elements', function () {
    var isMultiple = true;
    var weekDaySelection = 'sunday';
    var prevValue = 'monday';
    expect((0, _isWeekDayChecked["default"])(weekDaySelection, prevValue, isMultiple)).toBe(false);
  });
  it('should return true if multiple is true and previous value contains the selected weekDay', function () {
    var isMultiple = true;
    var weekDaySelection = 'sunday';
    var prevValue = ['sunday', 'monday', 'friday'];
    expect((0, _isWeekDayChecked["default"])(weekDaySelection, prevValue, isMultiple)).toBe(true);
  });
  it('should return false if multiple is true and previous value does NOT contains the selected weekDay', function () {
    var isMultiple = true;
    var weekDaySelection = 'sunday';
    var prevValue = ['monday', 'friday'];
    expect((0, _isWeekDayChecked["default"])(weekDaySelection, prevValue, isMultiple)).toBe(false);
  });
});