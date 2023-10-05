"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getPrevMinute = _interopRequireDefault(require("../getPrevMinute"));

describe('getPrevMinute', function () {
  it('should return the string "59" when any value is passed', function () {
    expect((0, _getPrevMinute["default"])()).toBe('59');
  });
  it('should return the string "59" when value passed converted to Number is equal to 0', function () {
    var values = ['0', 0];
    values.forEach(function (value) {
      return expect((0, _getPrevMinute["default"])(value)).toBe('59');
    });
  });
  it('should return the string of the value passed decreased by 1 when value passed converted to Number is different to 0', function () {
    var values = ['1', '22', '30', '44', '59', 9, 21, 12, 38, 58, 60];
    var expects = ['0', '21', '29', '43', '58', '8', '20', '11', '37', '57', '59'];
    values.forEach(function (value, index) {
      return expect((0, _getPrevMinute["default"])(value)).toBe(expects[index]);
    });
  });
});