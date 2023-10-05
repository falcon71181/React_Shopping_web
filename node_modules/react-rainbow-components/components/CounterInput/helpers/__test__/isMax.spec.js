"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isMax = _interopRequireDefault(require("../isMax"));

describe('isMax helper', function () {
  it('should return false when number + step < max', function () {
    var number = 2;
    var step = 3;
    var max = 6;
    var isMaxCondition = (0, _isMax["default"])(number, step, max);
    expect(isMaxCondition).toBe(false);
  });
  it('should return false when number + step = max', function () {
    var number = 3;
    var step = 3;
    var max = 6;
    var isMaxCondition = (0, _isMax["default"])(number, step, max);
    expect(isMaxCondition).toBe(false);
  });
  it('should return true when number + step > max', function () {
    var number = 4;
    var step = 3;
    var max = 6;
    var isMaxCondition = (0, _isMax["default"])(number, step, max);
    expect(isMaxCondition).toBe(true);
  });
});