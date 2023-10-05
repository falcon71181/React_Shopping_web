"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFormattedMonth;

function getFormattedMonth(value) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  try {
    return new Intl.DateTimeFormat(locale, {
      month: 'long'
    }).format(value);
  } catch (error) {
    console.error(error);
    return '';
  }
}