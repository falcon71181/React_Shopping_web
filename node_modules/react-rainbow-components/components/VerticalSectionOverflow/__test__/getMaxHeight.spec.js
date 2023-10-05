"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getMaxHeight = _interopRequireDefault(require("../getMaxHeight"));

describe('getMaxHeight', function () {
  it('should return the right height when is expanded and children has length of 3', function () {
    expect((0, _getMaxHeight["default"])([{}, {}, {}], true)).toBe(135);
  });
  it('should return the right height when is expanded and children is a single object', function () {
    expect((0, _getMaxHeight["default"])({}, true)).toBe(45);
  });
  it('should return 0 when is expanded and children is null', function () {
    expect((0, _getMaxHeight["default"])(null, true)).toBe(0);
  });
  it('should return 0 when is not expanded', function () {
    expect((0, _getMaxHeight["default"])({}, false)).toBe(0);
  });
});