"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getPrevHour = _interopRequireDefault(require("../getPrevHour"));

describe('getPrevHour', function () {
  it('should return the string "12" when any value is passed', function () {
    expect((0, _getPrevHour["default"])()).toBe('12');
  });
  it('should return the string "23" when no value is passed and hour24 is true', function () {
    expect((0, _getPrevHour["default"])(undefined, true)).toBe('23');
  });
  it('should return the string "12" when value passed converted to Number is equal to 0 or 1', function () {
    var values = ['0', 0, '1', 1];
    values.forEach(function (value) {
      return expect((0, _getPrevHour["default"])(value)).toBe('12');
    });
  });
  it('should return the string "23" when value passed converted to Number is equal to 0 and hour24 is true', function () {
    var values = ['0', 0];
    values.forEach(function (value) {
      return expect((0, _getPrevHour["default"])(value, true)).toBe('23');
    });
  });
  it('should return the string of the value passed decreased by 1 when value passed converted to Number is different to 0 or 1', function () {
    var values = ['03', '11', '22', '30', '44', 9, 21, 12, 38, 58];
    var expects = ['2', '10', '21', '29', '43', '8', '20', '11', '37', '57'];
    values.forEach(function (value, index) {
      return expect((0, _getPrevHour["default"])(value)).toBe(expects[index]);
    });
  });
  it('should return the string of the value passed decreased by 1 when value passed converted to Number is different to 0 and hour24 is true', function () {
    var values = ['1', '03', '11', '22', '30', '44', 9, 21, 12, 38, 58];
    var expects = ['0', '2', '10', '21', '29', '43', '8', '20', '11', '37', '57'];
    values.forEach(function (value, index) {
      return expect((0, _getPrevHour["default"])(value, true)).toBe(expects[index]);
    });
  });
});