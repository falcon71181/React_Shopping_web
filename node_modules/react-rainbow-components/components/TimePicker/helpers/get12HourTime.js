"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = get12HourTime;

function is12HourTimeAlready(value) {
  var values = value.split(' ');
  return values[0].length === 5 && (values[1] === 'AM' || values[1] === 'PM');
}

function get12Hour(hour) {
  var hourNumber = Number(hour);

  if (hourNumber === 0) {
    return '12';
  }

  if (hourNumber > 12 && hourNumber < 24) {
    if (hourNumber < 22) {
      return "0".concat(String(hourNumber - 12));
    }

    return String(hourNumber - 12);
  }

  return hour;
}

function getAmPmValue(hour) {
  var hourNumber = Number(hour);

  if (hourNumber > 11) {
    return 'PM';
  }

  return 'AM';
}

function get12HourTime(value) {
  if (value && typeof value === 'string') {
    if (is12HourTimeAlready(value)) {
      return value;
    }

    var values = value.split(':');
    var hour = values[0];
    var minutes = values[1];
    var hasValuesRightLength = hour.length === 2 && minutes.length === 2;

    if (hasValuesRightLength) {
      var hour12 = get12Hour(hour);
      var ampm = getAmPmValue(hour);
      return "".concat(hour12, ":").concat(minutes, " ").concat(ampm);
    }

    return undefined;
  }

  return undefined;
}