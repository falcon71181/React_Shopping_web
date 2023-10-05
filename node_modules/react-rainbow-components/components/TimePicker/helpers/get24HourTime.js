"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = get24HourTime;

function get24Hour(hour, ampm) {
  var hourNumber = Number(hour);

  if (ampm === 'AM') {
    if (hourNumber === 12) {
      return '00';
    }

    return hour;
  }

  if (ampm === 'PM') {
    if (hourNumber === 12) {
      return '12';
    }

    return String(hourNumber + 12);
  }

  return hour;
}

function get24HourTime(_ref) {
  var hour = _ref.hour,
      minutes = _ref.minutes,
      ampm = _ref.ampm;
  var hour24 = get24Hour(hour, ampm);
  return "".concat(hour24, ":").concat(minutes);
}