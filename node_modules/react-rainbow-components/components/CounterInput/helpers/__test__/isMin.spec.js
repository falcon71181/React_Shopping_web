"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isMin = _interopRequireDefault(require("../isMin"));

describe('isMax helper', function () {
  it('should return false when number - step > min', function () {
    var number = -2;
    var step = 3;
    var min = -6;
    var isMaxCondition = (0, _isMin["default"])(number, step, min);
    expect(isMaxCondition).toBe(false);
  });
  it('should return false when number - step = min', function () {
    var number = -3;
    var step = 3;
    var min = -6;
    var isMaxCondition = (0, _isMin["default"])(number, step, min);
    expect(isMaxCondition).toBe(false);
  });
  it('should return true when number - step < min', function () {
    var number = -4;
    var step = 3;
    var min = -6;
    var isMaxCondition = (0, _isMin["default"])(number, step, min);
    expect(isMaxCondition).toBe(true);
  });
});