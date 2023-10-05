"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getWeekDayLabel = _interopRequireDefault(require("../getWeekDayLabel"));

global.Intl = {
  DateTimeFormat: jest.fn(function (locale) {
    return {
      format: jest.fn(function () {
        if (locale === 'es-MX') {
          return 'L';
        }

        return 'M';
      })
    };
  })
};
describe('getWeekDayLabel', function () {
  it('should return day label in english when locale is not manually set', function () {
    var label = (0, _getWeekDayLabel["default"])('monday');
    expect(label).toBe('M');
  });
  it('should return empty string when no day is sent', function () {
    var label = (0, _getWeekDayLabel["default"])();
    expect(label).toBe('');
  });
  it('should return empty string when day is not valid', function () {
    var label = (0, _getWeekDayLabel["default"])('wrong-day-value');
    expect(label).toBe('');
  });
  it('should return localized string', function () {
    var label = (0, _getWeekDayLabel["default"])('monday', 'es-MX');
    expect(label).toBe('L');
  });
});