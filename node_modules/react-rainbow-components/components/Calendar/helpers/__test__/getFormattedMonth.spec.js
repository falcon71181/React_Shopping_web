"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getFormattedMonth = _interopRequireDefault(require("../getFormattedMonth"));

describe('getFormattedMonth', function () {
  it('should return the right month', function () {
    var date = new Date(2019, 2, 21);
    expect((0, _getFormattedMonth["default"])(date)).toBe('March');
  });
  it('should return an empty string when pass an invalid date', function () {
    expect((0, _getFormattedMonth["default"])('29-08-2003')).toBe('');
    expect((0, _getFormattedMonth["default"])('wrong date')).toBe('');
  });
});