"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getNextFocusedDate = _interopRequireDefault(require("../getNextFocusedDate"));

jest.mock('../getFirstDayMonth.js', function () {
  return jest.fn(function () {
    return '2020-01-01';
  });
});
describe('getNextFocusedDate', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it('should return the first day of current month when dates are not set', function () {
    expect((0, _getNextFocusedDate["default"])(undefined, undefined)).toBe('2020-01-01');
    expect((0, _getNextFocusedDate["default"])(null, null)).toBe('2020-01-01');
  });
  it('should return the first day of the second date when dates are not in the same month or year', function () {
    var date1 = new Date(2019, 10, 10);
    var date2 = new Date(2019, 11, 10);
    var date3 = new Date(2020, 10, 10);
    expect((0, _getNextFocusedDate["default"])(date1, date2)).toBe('2020-01-01');
    expect((0, _getNextFocusedDate["default"])(date1, date3)).toBe('2020-01-01');
    expect((0, _getNextFocusedDate["default"])(date2, date3)).toBe('2020-01-01');
  });
  it('should return the first date passed when dates are in the same month and year', function () {
    var date1 = new Date(2019, 10, 10);
    var date2 = new Date(2019, 10, 20);
    expect((0, _getNextFocusedDate["default"])(date1, date2)).toEqual(date1);
  });
});