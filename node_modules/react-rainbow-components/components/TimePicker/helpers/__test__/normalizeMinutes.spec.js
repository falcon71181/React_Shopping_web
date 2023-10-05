"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _normalizeMinutes = _interopRequireDefault(require("../normalizeMinutes"));

describe('normalizeMinutes', function () {
  it('should return an empty string when the value passed is other type than a number', function () {
    var values = ['', 'asd', '0asd123', null, undefined, {}, []];
    values.forEach(function (value) {
      return expect((0, _normalizeMinutes["default"])(value, '12')).toBe('');
    });
  });
  it('should return "00"', function () {
    var values = ['0', '00', '000', '0000'];
    values.forEach(function (value) {
      return expect((0, _normalizeMinutes["default"])(value, '23')).toBe('00');
    });
  });
  it('should prefix with 0 when the value is less than 10', function () {
    var values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var expects = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
    values.forEach(function (value, index) {
      return expect((0, _normalizeMinutes["default"])(value, '35')).toBe(expects[index]);
    });
  });
  it('should return the same value when the value passed is between 10 and 59', function () {
    var values = ['10', '010', '25', '025', '50', '59', '059'];
    var expects = ['10', '10', '25', '25', '50', '59', '59'];
    values.forEach(function (value, index) {
      return expect((0, _normalizeMinutes["default"])(value, '02')).toBe(expects[index]);
    });
  });
});