"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isValidDate = _interopRequireDefault(require("../isValidDate"));

describe('isValidDate', function () {
  it('should return false', function () {
    var values = [undefined, null, '', 0, {}, '29-08-2003', 'wrong date'];
    values.forEach(function (value) {
      expect((0, _isValidDate["default"])(value)).toBe(false);
    });
  });
  it('should return true', function () {
    var values = [new Date(2019, 3, 24, 11, 34, 43), new Date('04/24/2019 13:23')];
    values.forEach(function (value) {
      expect((0, _isValidDate["default"])(value)).toBe(true);
    });
  });
});