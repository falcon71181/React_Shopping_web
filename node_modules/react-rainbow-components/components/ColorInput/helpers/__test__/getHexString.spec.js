"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getHexString = _interopRequireDefault(require("../getHexString"));

describe('getHexString', function () {
  it('should prepend a # to the string', function () {
    var value = 'cccccc';
    expect((0, _getHexString["default"])(value)).toBe('#cccccc');
  });
  it('should return the same string', function () {
    var value = '#ccc';
    expect((0, _getHexString["default"])(value)).toBe('#ccc');
  });
  it('should return an empty string when value is invalid', function () {
    var values = [false, undefined, [], {}, -333];
    values.forEach(function (val) {
      expect((0, _getHexString["default"])(val)).toBe('');
    });
  });
});