"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isNumeric = _interopRequireDefault(require("../isNumeric"));

describe('isNumeric', function () {
  it('should return true if value is number', function () {
    expect((0, _isNumeric["default"])('1234')).toBe(true);
  });
  it('should return false if value is not number', function () {
    expect((0, _isNumeric["default"])('a')).toBe(false);
    expect((0, _isNumeric["default"])('4f4jg54zz')).toBe(false);
  });
  it('should return false if value is empty', function () {
    expect((0, _isNumeric["default"])('')).toBe(false);
  });
});