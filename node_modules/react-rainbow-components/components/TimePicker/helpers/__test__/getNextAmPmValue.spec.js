"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getNextAmPmValue = _interopRequireDefault(require("../getNextAmPmValue"));

describe('getNextAmPmValue', function () {
  it('should return the string "PM" when value passed is equal to "AM"', function () {
    expect((0, _getNextAmPmValue["default"])('AM')).toBe('PM');
  });
  it('should return the string "PM" when value passed is undefined', function () {
    expect((0, _getNextAmPmValue["default"])(undefined)).toBe('PM');
  });
  it('should return the string "AM" when value passed is different to "AM" or undefined', function () {
    var values = ['PM', 'ponlaya', 90, ''];
    values.forEach(function (value) {
      return expect((0, _getNextAmPmValue["default"])(value)).toBe('AM');
    });
  });
});