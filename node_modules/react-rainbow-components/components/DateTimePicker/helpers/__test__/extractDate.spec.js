"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extractDate = _interopRequireDefault(require("../extractDate"));

describe('extractDate', function () {
  it('should return an empty string when pass falsy values', function () {
    var values = [undefined, null, '', 0];
    values.forEach(function (value) {
      expect((0, _extractDate["default"])(value)).toBe('');
    });
  });
  it('should return an empty string when pass an invalid date', function () {
    expect((0, _extractDate["default"])('29-08-2003')).toBe('');
    expect((0, _extractDate["default"])('wrong date')).toBe('');
  });
  it('should return the right date', function () {
    expect((0, _extractDate["default"])(new Date(2019, 3, 24))).toBe('04/24/2019');
    expect((0, _extractDate["default"])(new Date('04/24/2019'))).toBe('04/24/2019');
    expect((0, _extractDate["default"])('04/24/2019')).toBe('04/24/2019');
  });
});