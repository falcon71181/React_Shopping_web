"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getLastDayMonth = _interopRequireDefault(require("../getLastDayMonth"));

describe('getLastDayMonth', function () {
  it('should return a Date of 2019/03/31 when 2019/03/01', function () {
    var date = new Date(2019, 2, 1);
    expect((0, _getLastDayMonth["default"])(date).getDate()).toBe(31);
    expect((0, _getLastDayMonth["default"])(date).getMonth()).toBe(2);
    expect((0, _getLastDayMonth["default"])(date).getUTCFullYear()).toBe(2019);
  });
});