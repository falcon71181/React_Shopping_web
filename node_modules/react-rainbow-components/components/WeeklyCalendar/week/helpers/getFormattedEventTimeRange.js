"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFormattedEventTimeRange;

var _getFormattedEventTime = _interopRequireDefault(require("./getFormattedEventTime"));

var formatter = function formatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

function getFormattedEventTimeRange(startDate, endDate, locale) {
  var startDateParts = formatter(locale).formatToParts(startDate);
  var endDateParts = formatter(locale).formatToParts(endDate);
  var formattedStartDate = (0, _getFormattedEventTime["default"])(startDateParts.filter(function (_ref, index, arr) {
    var type = _ref.type,
        value = _ref.value;

    if (type.toLowerCase() === 'dayperiod' && value === endDateParts[index].value) {
      return false;
    }

    var next = arr[index + 1];

    if (next && next.type.toLowerCase() === 'dayperiod' && next.value === endDateParts[index + 1].value) {
      return false;
    }

    return true;
  }));
  var formattedEndDate = (0, _getFormattedEventTime["default"])(endDateParts);
  return "".concat(formattedStartDate, " - ").concat(formattedEndDate);
}