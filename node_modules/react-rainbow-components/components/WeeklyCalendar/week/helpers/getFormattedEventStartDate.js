"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFormattedEventStartDate;

var _getFormattedEventTime = _interopRequireDefault(require("./getFormattedEventTime"));

function getFormattedEventStartDate(startDate, locale) {
  var startDateParts = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).formatToParts(startDate);
  return (0, _getFormattedEventTime["default"])(startDateParts);
}