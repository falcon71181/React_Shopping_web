"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isEmptyRange = _interopRequireDefault(require("../isEmptyRange"));

describe('isEmptyRange', function () {
  it('should return true', function () {
    var ranges = [null, undefined, [], {}, 0, [undefined], [undefined, undefined]];
    ranges.forEach(function (range) {
      expect((0, _isEmptyRange["default"])(range)).toBe(true);
    });
  });
  it('should return false', function () {
    var ranges = [[1], [1, 2]];
    ranges.forEach(function (range) {
      expect((0, _isEmptyRange["default"])(range)).toBe(false);
    });
  });
});