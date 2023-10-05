"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isOptionSelected = _interopRequireDefault(require("../isOptionSelected"));

var option = {
  value: 'value-1'
};
describe('isOptionSelected', function () {
  it('should return false if values is falsy', function () {
    expect((0, _isOptionSelected["default"])(undefined, option)).toBe(false);
    expect((0, _isOptionSelected["default"])(null, option)).toBe(false);
    expect((0, _isOptionSelected["default"])('', option)).toBe(false);
    expect((0, _isOptionSelected["default"])(0, option)).toBe(false);
  });
  it('should return false if values is truty but not an array', function () {
    expect((0, _isOptionSelected["default"])({}, option)).toBe(false);
    expect((0, _isOptionSelected["default"])('some text', option)).toBe(false);
    expect((0, _isOptionSelected["default"])(12, option)).toBe(false);
    expect((0, _isOptionSelected["default"])(function () {}, option)).toBe(false);
  });
  it('should return false if the option does not exists in the values array', function () {
    expect((0, _isOptionSelected["default"])([], option)).toBe(false);
    expect((0, _isOptionSelected["default"])(['value-2'], option)).toBe(false);
  });
  it('should return true if the option exists in the values array', function () {
    expect((0, _isOptionSelected["default"])(['value-2', 'value-1', 'value-5'], option)).toBe(true);
  });
});