"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getSign = _interopRequireDefault(require("../getSign"));

describe('getSign', function () {
  it('should return -1', function () {
    var values = [-1, -1.35, -0.53];
    values.forEach(function (value) {
      return expect((0, _getSign["default"])(value)).toBe(-1);
    });
  });
  it('should return 0', function () {
    var values = [-0, 0];
    values.forEach(function (value) {
      return expect((0, _getSign["default"])(value)).toBe(0);
    });
  });
  it('should return 1', function () {
    var values = [0.45, 1, 34.467];
    values.forEach(function (value) {
      return expect((0, _getSign["default"])(value)).toBe(1);
    });
  });
});