"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _compareDates = _interopRequireDefault(require("../compareDates"));

describe('compareDates', function () {
  it('should return -1', function () {
    var date1 = new Date(2019, 1, 1);
    var date2 = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect((0, _compareDates["default"])(date1, date2)).toBe(-1);
  });
  it('should return 0', function () {
    var date1 = new Date(2019, 2, 1);
    var date2 = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect((0, _compareDates["default"])(date1, date2)).toBe(0);
  });
  it('should return 1', function () {
    var date1 = new Date(2019, 3, 1);
    var date2 = new Date(2019, 2, 1, 23, 12, 34, 600);
    expect((0, _compareDates["default"])(date1, date2)).toBe(1);
  });
});