"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = _interopRequireDefault(require(".."));

describe('CounterManager', function () {
  it('should set counter to 3', function () {
    _["default"].increment();

    _["default"].increment();

    _["default"].increment();

    expect(_["default"].counter).toBe(3);
    expect(_["default"].hasModalsOpen()).toBe(true);
  });
  it('should set counter to 1', function () {
    _["default"].decrement();

    _["default"].decrement();

    expect(_["default"].counter).toBe(1);
    expect(_["default"].hasModalsOpen()).toBe(true);
  });
  it('should set counter to 0', function () {
    _["default"].decrement();

    expect(_["default"].counter).toBe(0);
    expect(_["default"].hasModalsOpen()).toBe(false);
  });
});