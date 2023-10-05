"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _normalizeInitials = _interopRequireDefault(require("../normalizeInitials"));

describe('normalizeInitials()', function () {
  it('should return one letter when one letter is passed', function () {
    expect((0, _normalizeInitials["default"])('J')).toBe('J');
  });
  it('should return two letters when two letters are passed', function () {
    expect((0, _normalizeInitials["default"])('Jd')).toBe('Jd');
  });
  it('should return two letters when more of two letters are passed', function () {
    expect((0, _normalizeInitials["default"])('JdE')).toBe('Jd');
  });
});