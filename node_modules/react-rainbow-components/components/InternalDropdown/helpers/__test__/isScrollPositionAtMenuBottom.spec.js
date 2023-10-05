"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isScrollPositionAtMenuBottom = _interopRequireDefault(require("../isScrollPositionAtMenuBottom"));

describe('isScrollPositionAtMenuBottom', function () {
  it('should return true when scroll position is at bottom', function () {
    var menuRef = {
      scrollHeight: 925,
      scrollTop: 700,
      clientHeight: 225
    };
    expect((0, _isScrollPositionAtMenuBottom["default"])(menuRef)).toBe(true);
  });
  it('should return false when scroll position is not at bottom', function () {
    var menuRef = {
      scrollHeight: 925,
      scrollTop: 400,
      clientHeight: 225
    };
    expect((0, _isScrollPositionAtMenuBottom["default"])(menuRef)).toBe(false);
  });
});