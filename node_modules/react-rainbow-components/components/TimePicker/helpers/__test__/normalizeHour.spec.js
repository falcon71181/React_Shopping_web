"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _normalizeHour = _interopRequireDefault(require("../normalizeHour"));

describe('normalizeHour', function () {
  it('should return an empty string when the value passed is other type than a number', function () {
    var values = ['', 'asd', '0asd123', null, undefined, {}, []];
    values.forEach(function (value) {
      return expect((0, _normalizeHour["default"])(value)).toBe('');
    });
  });
  it('should return "12" when the value passed is "000"', function () {
    expect((0, _normalizeHour["default"])('000')).toBe('12');
  });
  it('should return "00" when the value passed is "000" and hour24 is true', function () {
    expect((0, _normalizeHour["default"])('000', true)).toBe('00');
  });
  it('should return "00"', function () {
    var values = ['0', '00', '0000'];
    values.forEach(function (value) {
      return expect((0, _normalizeHour["default"])(value)).toBe('00');
    });
    values.forEach(function (value) {
      return expect((0, _normalizeHour["default"])(value, true)).toBe('00');
    });
  });
  it('should prefix with 0 when the value is less than 10', function () {
    var values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var expects = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
    values.forEach(function (value, index) {
      return expect((0, _normalizeHour["default"])(value)).toBe(expects[index]);
    });
    values.forEach(function (value, index) {
      return expect((0, _normalizeHour["default"])(value, true)).toBe(expects[index]);
    });
  });
  it('should return the value passed minus 12 when the value is between 12 and 20', function () {
    var values = ['13', '14', '15', '16', '17', '18', '19'];
    var expects = ['01', '02', '03', '04', '05', '06', '07'];
    values.forEach(function (value, index) {
      return expect((0, _normalizeHour["default"])(value)).toBe(expects[index]);
    });
  });
  it('should return the value passed when the value is between 12 and 20 and hour24 is true', function () {
    var values = ['13', '14', '15', '16', '17', '18', '19'];
    var expects = ['13', '14', '15', '16', '17', '18', '19'];
    values.forEach(function (value, index) {
      return expect((0, _normalizeHour["default"])(value, true)).toBe(expects[index]);
    });
  });
  it('should return "11"', function () {
    expect((0, _normalizeHour["default"])('011')).toBe('11');
  });
});