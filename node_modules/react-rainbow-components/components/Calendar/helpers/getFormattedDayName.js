"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFormattedDayName;

function getFormattedDayName(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'short';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';

  try {
    return new Intl.DateTimeFormat(locale, {
      weekday: format
    }).format(date);
  } catch (error) {
    console.log(error);
    return '';
  }
}