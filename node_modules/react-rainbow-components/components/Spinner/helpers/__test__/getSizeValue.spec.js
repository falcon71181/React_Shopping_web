"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getSizeValue = _interopRequireDefault(require("../getSizeValue"));

describe('getSizeValue', function () {
  it('should return "16" when size is xx-small', function () {
    expect((0, _getSizeValue["default"])('xx-small')).toBe('16');
  });
  it('should return "20" when size is x-small', function () {
    expect((0, _getSizeValue["default"])('x-small')).toBe('20');
  });
  it('should return "26" when size is small', function () {
    expect((0, _getSizeValue["default"])('small')).toBe('26');
  });
  it('should return "32" when size is medium', function () {
    expect((0, _getSizeValue["default"])('medium')).toBe('32');
  });
  it('should return "48" when size is large', function () {
    expect((0, _getSizeValue["default"])('large')).toBe('48');
  });
  it('should return "82" when size is x-large', function () {
    expect((0, _getSizeValue["default"])('x-large')).toBe('82');
  });
  it('should return "32" when size is an incorrect value', function () {
    var values = ['xx-smal', 'x-smal', 'smal', 'mediu', 5, 'x-big'];
    values.forEach(function (value) {
      expect((0, _getSizeValue["default"])(value)).toBe('32');
    });
  });
});