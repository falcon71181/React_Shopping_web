"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isOptionSelected = _interopRequireDefault(require("../isOptionSelected"));

describe('isOptionSelected', function () {
  it('should return true when name is present in the array of values', function () {
    var values = ['option1', 'option2'];
    var name = 'option2';
    expect((0, _isOptionSelected["default"])(values, name)).toBe(true);
  });
  it('should return false when name is not present in the array of values', function () {
    var values = ['option1', 'option2'];
    var name = 'option3';
    expect((0, _isOptionSelected["default"])(values, name)).toBe(false);
  });
  it('should return true when values is a string and it is equal to name', function () {
    var values = 'option2';
    var name = 'option2';
    expect((0, _isOptionSelected["default"])(values, name)).toBe(true);
  });
  it('should return false when values is a string and it is different to name', function () {
    var values = 'option1';
    var name = 'option2';
    expect((0, _isOptionSelected["default"])(values, name)).toBe(false);
  });
  it('should return false when the value passed is other type than array and string', function () {
    [undefined, null, 12, {}, function () {}].forEach(function (value) {
      expect((0, _isOptionSelected["default"])(value, 'option')).toBe(false);
    });
  });
});