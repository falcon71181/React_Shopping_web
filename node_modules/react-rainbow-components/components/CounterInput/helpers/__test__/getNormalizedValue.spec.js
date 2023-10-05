"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getNormalizedValue = _interopRequireDefault(require("../getNormalizedValue"));

describe('getNormalizedValue helper', function () {
  it('should return the numbers without unnecesary zeros', function () {
    var numbers = [0.30000000000000004, 6.800000000000001, 1.9000000000000001, 0.11000000000000009, 0.20000000000000284, 7.6000000000000005, 0.020000000000000004];
    var rounded = [0.3, 6.8, 1.9, 0.11, 0.2, 7.6, 0.02];
    numbers.forEach(function (value, index) {
      expect((0, _getNormalizedValue["default"])(value)).toBe(rounded[index]);
    });
  });
});