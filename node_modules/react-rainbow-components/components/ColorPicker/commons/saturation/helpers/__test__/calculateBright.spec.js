"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _calculateBright = _interopRequireDefault(require("../calculateBright"));

describe('calculateBright', function () {
  it('should return the right value when pageY is a number', function () {
    var event = {
      pageY: 20
    };
    var rect = {
      height: 100,
      top: 0
    };
    expect((0, _calculateBright["default"])(event, rect)).toBe(80);
  });
  it('should return the right value when pageY is not a number', function () {
    var event = {
      touches: [{
        pageY: 0
      }]
    };
    var rect = {
      height: 100,
      top: 0
    };
    expect((0, _calculateBright["default"])(event, rect)).toBe(100);
  });
});