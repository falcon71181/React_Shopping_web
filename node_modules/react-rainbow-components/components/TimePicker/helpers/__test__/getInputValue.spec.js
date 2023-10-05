"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getInputValue = _interopRequireDefault(require("../getInputValue"));

describe('getInputValue', function () {
  it('should return an empty string when value is not passed and placeholder is passed', function () {
    var placholder = 'Enter your local time';
    expect((0, _getInputValue["default"])(undefined, placholder)).toBe('');
  });
  it('should return the value passed', function () {
    var value = '18:35';
    expect((0, _getInputValue["default"])(value)).toBe('18:35');
  });
  it('should return "--:-- --" when value and placeholder are not passed', function () {
    expect((0, _getInputValue["default"])()).toBe('--:-- --');
  });
  it('should return "--:--" when hour24 is true and value and placeholder are falsey', function () {
    expect((0, _getInputValue["default"])(undefined, undefined, true)).toBe('--:--');
    expect((0, _getInputValue["default"])(null, null, true)).toBe('--:--');
    expect((0, _getInputValue["default"])(false, false, true)).toBe('--:--');
  });
});