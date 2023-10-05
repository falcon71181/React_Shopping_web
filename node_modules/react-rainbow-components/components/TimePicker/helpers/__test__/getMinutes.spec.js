"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getMinutes = _interopRequireDefault(require("../getMinutes"));

describe('getMinutes', function () {
  it('should return the right minutes when value passed is a formatted time', function () {
    var values = ['01:32 AM', '11:02 AM', '05:00 AM', '10:19 AM'];
    var expects = ['32', '02', '00', '19'];
    values.forEach(function (value, index) {
      return expect((0, _getMinutes["default"])(value)).toBe(expects[index]);
    });
  });
  it('should return an empty string when value passed is falsy', function () {
    var values = [null, false, NaN, 0, undefined];
    values.forEach(function (value) {
      return expect((0, _getMinutes["default"])(value)).toBe('');
    });
  });
});