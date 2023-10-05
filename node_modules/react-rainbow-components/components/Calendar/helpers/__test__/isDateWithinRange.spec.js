"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isDateWithinRange = _interopRequireDefault(require("../isDateWithinRange"));

describe('isDateWithinRange', function () {
  it('should return false', function () {
    var range = [new Date(2019, 2, 1, 0, 0, 0, 600), new Date(2019, 15, 1, 23, 12, 34, 600)];
    expect((0, _isDateWithinRange["default"])(null, range)).toBe(false);
    expect((0, _isDateWithinRange["default"])(undefined, range)).toBe(false);
    expect((0, _isDateWithinRange["default"])(new Date(2019, 1, 1), range)).toBe(false);
    expect((0, _isDateWithinRange["default"])(new Date(2019, 18, 1), range)).toBe(false);
  });
  it('should return true', function () {
    var range = [new Date(2019, 2, 1), new Date(2019, 15, 1)];
    expect((0, _isDateWithinRange["default"])(new Date(2019, 2, 1), range)).toBe(true);
    expect((0, _isDateWithinRange["default"])(new Date(2019, 13, 1), range)).toBe(true);
    expect((0, _isDateWithinRange["default"])(new Date(2019, 15, 1), range)).toBe(true);
  });
});