"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isSameYear = _interopRequireDefault(require("../isSameYear"));

describe('isSameYear', function () {
  it('should return true when dates passed are in the same year', function () {
    expect((0, _isSameYear["default"])('04/21/2019', '04/24/2019')).toBe(true);
    expect((0, _isSameYear["default"])('03/8/2019', new Date('04/24/2019'))).toBe(true);
    expect((0, _isSameYear["default"])('04/24/2019', new Date(2019, 3, 24))).toBe(true);
  });
  it('should return false when dates passed are in the same year', function () {
    expect((0, _isSameYear["default"])('04/24/2019', '04/24/2018')).toBe(false);
    expect((0, _isSameYear["default"])('04/24/2018', new Date('04/23/2019'))).toBe(false);
    expect((0, _isSameYear["default"])('04/24/2019', new Date(2018, 1, 24))).toBe(false);
  });
  it('should return false when pass an invalid date', function () {
    expect((0, _isSameYear["default"])('29-08-2003', 123)).toBe(false);
    expect((0, _isSameYear["default"])('wrong date', null)).toBe(false);
  });
});