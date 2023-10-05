"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isPrintableCharacter = _interopRequireDefault(require("../isPrintableCharacter"));

describe('isPrintableCharacter', function () {
  it('should return true', function () {
    ['a', 'b', 'z', '3', '*', '['].forEach(function (character) {
      expect((0, _isPrintableCharacter["default"])(character)).toBe(true);
    });
  });
  it('should return false', function () {
    ['aa', null, undefined, [], {}].forEach(function (character) {
      expect((0, _isPrintableCharacter["default"])(character)).toBe(false);
    });
  });
});