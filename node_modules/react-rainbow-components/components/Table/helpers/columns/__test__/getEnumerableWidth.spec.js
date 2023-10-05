"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getEnumerableWidth = _interopRequireDefault(require("../getEnumerableWidth"));

describe('getEnumerableWidth', function () {
  it('should return the default width when value is not sent', function () {
    expect((0, _getEnumerableWidth["default"])()).toBe(48);
  });
  it('should return the default calculated width when value is default', function () {
    expect((0, _getEnumerableWidth["default"])(0)).toBe(48);
  });
  it('should return the right width when value length is 3 (999)', function () {
    expect((0, _getEnumerableWidth["default"])(999)).toBe(72);
  });
});