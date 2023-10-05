"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _shouldDateBeSelected = _interopRequireDefault(require("../shouldDateBeSelected"));

describe('shouldDateBeSelected', function () {
  it('should return true when selectionType is single and date is the same as value', function () {
    var date = new Date(2019, 1, 1);
    var value = new Date(2019, 1, 1);
    var range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', undefined)).toBe(true);
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', null)).toBe(true);
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', [])).toBe(true);
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', range)).toBe(true);
  });
  it('should return true when selectionType is range and date is same as range boundaries', function () {
    var date1 = new Date(2019, 1, 1);
    var date2 = new Date(2019, 1, 15);
    var value = new Date(2019, 1, 1);
    var range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
    expect((0, _shouldDateBeSelected["default"])(date1, undefined, 'range', range)).toBe(true);
    expect((0, _shouldDateBeSelected["default"])(date1, null, 'range', range)).toBe(true);
    expect((0, _shouldDateBeSelected["default"])(date1, value, 'range', range)).toBe(true);
    expect((0, _shouldDateBeSelected["default"])(date2, value, 'range', range)).toBe(true);
  });
  it('should return false when selectionType is single and date is not the same as value', function () {
    var date = new Date(2019, 1, 12);
    var value = new Date(2019, 1, 1);
    var range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', undefined)).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', null)).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', [])).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date, value, 'single', range)).toBe(false);
  });
  it('should return false when selectionType is range and date is not the same as range boundaries', function () {
    var date1 = new Date(2019, 1, 2);
    var date2 = new Date(2019, 1, 12);
    var value = new Date(2019, 1, 1);
    var range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
    expect((0, _shouldDateBeSelected["default"])(date1, undefined, 'range', range)).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date1, null, 'range', range)).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date1, value, 'range', range)).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date2, value, 'range', range)).toBe(false);
  });
  it('should return false when selectionType is range and range is not an array or is an empty array', function () {
    var date1 = new Date(2019, 1, 2);
    var value = new Date(2019, 1, 1);
    expect((0, _shouldDateBeSelected["default"])(date1, value, 'range', 23)).toBe(false);
    expect((0, _shouldDateBeSelected["default"])(date1, value, 'range', [])).toBe(false);
  });
});