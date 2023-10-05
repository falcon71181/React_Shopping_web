"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getValue = _interopRequireDefault(require("../getValue"));

describe('getValueOfNan helper', function () {
  it('should return 0', function () {
    var number = (0, _getValue["default"])(NaN);
    expect(number).toBe(0);
  });
  it('should return 3', function () {
    var number = (0, _getValue["default"])(3);
    expect(number).toBe(3);
  });
});