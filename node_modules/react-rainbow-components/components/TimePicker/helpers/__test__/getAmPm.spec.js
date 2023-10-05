"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getAmPm = _interopRequireDefault(require("../getAmPm"));

describe('getAmPm', function () {
  it('should return "AM" when value passed is a valid formatted time', function () {
    var values = ['01:32 AM', '11:02 AM', '05:00 AM', '10:19 AM'];
    values.forEach(function (value) {
      return expect((0, _getAmPm["default"])(value)).toBe('AM');
    });
  });
  it('should return "PM" when value passed is a valid formatted time', function () {
    var values = ['01:32 PM', '11:02 PM', '05:00 PM', '10:19 PM'];
    values.forEach(function (value) {
      return expect((0, _getAmPm["default"])(value)).toBe('PM');
    });
  });
  it('should return undefined when value passed is falsy', function () {
    var values = [null, false, NaN, 0, undefined];
    values.forEach(function (value) {
      return expect((0, _getAmPm["default"])(value)).toBe(undefined);
    });
  });
});