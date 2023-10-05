"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _clamp = _interopRequireDefault(require("../color/clamp"));

describe('clamp', function () {
  it('should return the same value if it is between 0 and 1', function () {
    [0, 0.1, 0.5, 1].forEach(function (value) {
      expect((0, _clamp["default"])(value)).toBe(value);
    });
  });
  it('should return 0 if value is less than 0', function () {
    [-2, -5, -7].forEach(function (value) {
      expect((0, _clamp["default"])(value)).toBe(0);
    });
  });
  it('should return 1 if value is greater than 1', function () {
    [2, 5, 7].forEach(function (value) {
      expect((0, _clamp["default"])(value)).toBe(1);
    });
  });
});