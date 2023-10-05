"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isNumber = _interopRequireDefault(require("../isNumber"));

describe('isNumber', function () {
  it('should return true when the value passed is a positive integer number', function () {
    var values = ['00', '01', '56', 99, 100];
    values.forEach(function (value) {
      return expect((0, _isNumber["default"])(value)).toBe(true);
    });
  });
  it('should return false when the value passed is not a positive integer number', function () {
    var values = [0.23, '0,1', -100, [], ''];
    values.forEach(function (value) {
      return expect((0, _isNumber["default"])(value)).toBe(false);
    });
  });
});