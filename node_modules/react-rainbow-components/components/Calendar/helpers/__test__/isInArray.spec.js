"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isInArray = _interopRequireDefault(require("../isInArray"));

describe('isInArray', function () {
  it('should return true', function () {
    var array = ['09/07/2022', new Date('09/08/2022')];
    expect((0, _isInArray["default"])(new Date('09/07/2022'), array)).toBe(true);
    expect((0, _isInArray["default"])('09/08/2022', array)).toBe(true);
  });
  it('should return false', function () {
    var array = ['09/07/2022', new Date('09/08/2022')];
    expect((0, _isInArray["default"])(new Date('10/07/2022'), array)).toBe(false);
    expect((0, _isInArray["default"])('09/08/2022', undefined)).toBe(false);
  });
});