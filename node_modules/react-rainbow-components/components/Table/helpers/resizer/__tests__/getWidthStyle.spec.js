"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getWidthStyle = _interopRequireDefault(require("../getWidthStyle"));

describe('resizer helper', function () {
  describe('getWidthStyle', function () {
    it('should return an empty string when value passed is not great than zero', function () {
      var values = [0, -1, undefined];
      values.forEach(function (value) {
        return expect((0, _getWidthStyle["default"])(value)).toBe('');
      });
    });
    it('should return the right width style', function () {
      expect((0, _getWidthStyle["default"])(32)).toBe('width: 32px');
    });
  });
});