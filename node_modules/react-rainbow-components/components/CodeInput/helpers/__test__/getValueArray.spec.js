"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getValueArray = _interopRequireDefault(require("../getValueArray"));

describe('getValueArray', function () {
  it('should return an array with 2 empty positions when value is number and maxLength is 2', function () {
    var maxLength = 2;
    expect((0, _getValueArray["default"])('', maxLength)).toEqual(['', '']);
  });
  it('should return an array with 3 positions filled with numbers when a mixed text and numbers are passed as value and maxLength is 3', function () {
    var maxLength = 3;
    expect((0, _getValueArray["default"])('a1b2c3d4c5', maxLength)).toEqual(['1', '2', '3']);
  });
  it('should return an array with the last position empty when value is a string with two numbers and maxLength is 3', function () {
    var maxLength = 3;
    expect((0, _getValueArray["default"])('12', maxLength)).toEqual(['1', '2', '']);
  });
});