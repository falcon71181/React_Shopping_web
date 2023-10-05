"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extractTime = _interopRequireDefault(require("../extractTime"));

describe('extractTime', function () {
  it('should return an empty string when pass falsy values', function () {
    var values = [undefined, null, '', 0];
    values.forEach(function (value) {
      expect((0, _extractTime["default"])(value)).toBe('');
    });
  });
  it('should return an empty string when pass an invalid date', function () {
    expect((0, _extractTime["default"])('29-08-2003')).toBe('');
    expect((0, _extractTime["default"])('wrong date')).toBe('');
  });
  it('should return the right time', function () {
    expect((0, _extractTime["default"])(new Date(2019, 3, 24, 11, 34, 43))).toBe('11:34 AM');
    expect((0, _extractTime["default"])(new Date('04/24/2019 13:23'))).toBe('01:23 PM');
    expect((0, _extractTime["default"])('04/24/2019 20:48')).toBe('08:48 PM');
  });
  it('should return the right time when hour24 param is true', function () {
    expect((0, _extractTime["default"])(new Date(2019, 3, 24, 11, 34, 43), true)).toBe('11:34');
    expect((0, _extractTime["default"])(new Date('04/24/2019 13:23'), true)).toBe('13:23');
    expect((0, _extractTime["default"])('04/24/2019 20:48', true)).toBe('20:48');
  });
});