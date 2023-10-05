"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getDefaultAmPm = _interopRequireDefault(require("../getDefaultAmPm"));

describe('getDefaultAmPm', function () {
  it('should return "PM" when value passed is a number and it is greater than 11 and less than 20', function () {
    var values = [12, 13, 14, 17, 18, 19];
    values.forEach(function (value) {
      return expect((0, _getDefaultAmPm["default"])(value)).toBe('PM');
    });
  });
  it('should return "AM" when value passed is a number and it is less than 11 and greater than 20', function () {
    var values = [0, 1, 3, 9, 11, 20, 21, 23, 34];
    values.forEach(function (value) {
      return expect((0, _getDefaultAmPm["default"])(value)).toBe('AM');
    });
  });
});