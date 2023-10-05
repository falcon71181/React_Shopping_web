"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isSameMonth = _interopRequireDefault(require("../isSameMonth"));

describe('isSameMonth', function () {
  it('should return true when dates passed are in the same month', function () {
    expect((0, _isSameMonth["default"])('04/21/2019', '04/24/2019')).toBe(true);
    expect((0, _isSameMonth["default"])('04/21/2018', '04/24/2019')).toBe(true);
    expect((0, _isSameMonth["default"])('04/24/2018', new Date(2019, 3, 24))).toBe(true);
  });
  it('should return false when dates passed are not in the same month', function () {
    expect((0, _isSameMonth["default"])('03/24/2019', '04/24/2018')).toBe(false);
    expect((0, _isSameMonth["default"])('03/24/2018', new Date('04/23/2019'))).toBe(false);
    expect((0, _isSameMonth["default"])('04/24/2018', new Date(2018, 1, 24))).toBe(false);
  });
  it('should return false when pass an invalid date', function () {
    expect((0, _isSameMonth["default"])('29-08-2008', 123)).toBe(false);
    expect((0, _isSameMonth["default"])('wrong date', null)).toBe(false);
  });
});