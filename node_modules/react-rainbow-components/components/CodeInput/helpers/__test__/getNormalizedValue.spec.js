"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getNormalizedValue = _interopRequireDefault(require("../getNormalizedValue"));

describe('getNormalizedValue', function () {
  it('should return empty if inputValue is not number', function () {
    var inputValue = '';
    var inputIndex = 0;
    var value = [];
    expect((0, _getNormalizedValue["default"])(inputValue, inputIndex, value)).toBe('');
  });
  it('should return the right normalized value by joining current array value with new value', function () {
    var inputValue = '2';
    var inputIndex = 1;
    var value = ['2', ''];
    expect((0, _getNormalizedValue["default"])(inputValue, inputIndex, value)).toBe('22');
  });
  it('should return the right normalized value when removing value from index 1', function () {
    var inputValue = '';
    var inputIndex = 1;
    var value = ['2', '2'];
    expect((0, _getNormalizedValue["default"])(inputValue, inputIndex, value)).toBe('2');
  });
});