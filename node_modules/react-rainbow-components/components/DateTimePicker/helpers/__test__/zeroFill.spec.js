"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _zeroFill = _interopRequireDefault(require("../zeroFill"));

describe('zeroFill', function () {
  it('should return empty string', function () {
    var values = [undefined, null, ''];
    values.forEach(function (value) {
      expect((0, _zeroFill["default"])(value, 2)).toBe('');
    });
  });
  it('should return correct values string', function () {
    var values = [1, 3, '4', 0];
    var expectedResult = ['01', '03', '04', '00'];
    values.forEach(function (value, index) {
      expect((0, _zeroFill["default"])(value, 2)).toBe(expectedResult[index]);
    });
  });
});