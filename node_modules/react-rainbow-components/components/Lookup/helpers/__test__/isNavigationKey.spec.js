"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isNavigationKey = _interopRequireDefault(require("../isNavigationKey"));

describe('isNavigationKey', function () {
  it('should return true when pass up, down or enter key', function () {
    var keys = [38, 40, 13];
    keys.forEach(function (key) {
      expect((0, _isNavigationKey["default"])(key)).toBe(true);
    });
  });
  it('should return false when pass other keys than up, down or enter', function () {
    var keys = [37, 39, 27, 9, 8];
    keys.forEach(function (key) {
      expect((0, _isNavigationKey["default"])(key)).toBe(false);
    });
  });
});