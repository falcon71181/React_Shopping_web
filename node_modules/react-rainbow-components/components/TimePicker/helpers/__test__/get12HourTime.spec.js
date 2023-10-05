"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _get12HourTime = _interopRequireDefault(require("../get12HourTime"));

describe('get12HourTime', function () {
  it('should return undefined when the value passed does not exists or is not a string', function () {
    var values = [undefined, null, '', [], {}, 123];
    values.forEach(function (value) {
      return expect((0, _get12HourTime["default"])(value)).toBe(undefined);
    });
  });
  it('should return undefined when the values passed does not have the right format', function () {
    var values = ['1312', '2:2', '1:32', '12:5', '10-35', '05 56'];
    values.forEach(function (value) {
      return expect((0, _get12HourTime["default"])(value)).toBe(undefined);
    });
  });
  it('should return the right 12 hour for AM time', function () {
    var values = ['00:12', '01:35', '02:59', '03:50', '04:00', '05:56', '06:30', '07:08', '08:45', '09:20', '10:34', '11:16'];
    var expects = ['12:12 AM', '01:35 AM', '02:59 AM', '03:50 AM', '04:00 AM', '05:56 AM', '06:30 AM', '07:08 AM', '08:45 AM', '09:20 AM', '10:34 AM', '11:16 AM'];
    values.forEach(function (value, index) {
      return expect((0, _get12HourTime["default"])(value)).toBe(expects[index]);
    });
  });
  it('should return the right 12 hour for PM time', function () {
    var values = ['12:12', '13:35', '14:59', '15:50', '16:00', '17:56', '18:30', '19:08', '20:20', '21:34', '22:16', '23:02'];
    var expects = ['12:12 PM', '01:35 PM', '02:59 PM', '03:50 PM', '04:00 PM', '05:56 PM', '06:30 PM', '07:08 PM', '08:20 PM', '09:34 PM', '10:16 PM', '11:02 PM'];
    values.forEach(function (value, index) {
      return expect((0, _get12HourTime["default"])(value)).toBe(expects[index]);
    });
  });
});