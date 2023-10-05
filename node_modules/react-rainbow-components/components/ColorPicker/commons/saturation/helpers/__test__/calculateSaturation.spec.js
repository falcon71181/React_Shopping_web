"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _calculateSaturation = _interopRequireDefault(require("../calculateSaturation"));

describe('calculateSaturation', function () {
  it('should the right value when pageX is a number', function () {
    var event = {
      pageX: 20
    };
    var rect = {
      width: 100,
      left: 0
    };
    expect((0, _calculateSaturation["default"])(event, rect)).toBe(20);
  });
  it('should the right value when pageX is not a number', function () {
    var event = {
      touches: [{
        pageX: 0
      }]
    };
    var rect = {
      width: 100,
      left: 0
    };
    expect((0, _calculateSaturation["default"])(event, rect)).toBe(0);
  });
});