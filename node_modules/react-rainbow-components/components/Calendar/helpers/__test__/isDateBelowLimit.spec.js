"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isDateBelowLimit = _interopRequireDefault(require("../isDateBelowLimit"));

describe('isDateBelowLimit', function () {
  it('should return true', function () {
    var date = new Date(2019, 1, 1);
    var limit = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect((0, _isDateBelowLimit["default"])(date, limit)).toBe(true);
  });
  it('should return false', function () {
    var date = new Date(2019, 3, 1);
    var limit = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect((0, _isDateBelowLimit["default"])(date, limit)).toBe(false);
    expect((0, _isDateBelowLimit["default"])(limit, limit)).toBe(false);
  });
});