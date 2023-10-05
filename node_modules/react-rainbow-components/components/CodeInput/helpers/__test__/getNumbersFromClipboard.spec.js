"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getNumbersFromClipboard = _interopRequireDefault(require("../getNumbersFromClipboard"));

describe('getNumbersFromClipboard', function () {
  it('should return empty if value is empty', function () {
    expect((0, _getNumbersFromClipboard["default"])('')).toBe('');
  });
  it('should return numbers only if value is string mixed with numbers', function () {
    expect((0, _getNumbersFromClipboard["default"])('1a2s3d4f5g6h7j8k')).toBe('12345678');
  });
});