"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatDate;
var FORMATS = {
  small: {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric'
  },
  medium: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  },
  large: {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
};

function formatDate(date) {
  var formatStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';

  if (date) {
    try {
      var options = FORMATS[formatStyle] || FORMATS.medium;
      var value = typeof date === 'string' ? new Date(date) : date;
      return new Intl.DateTimeFormat(locale, options).format(value);
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  return '';
}