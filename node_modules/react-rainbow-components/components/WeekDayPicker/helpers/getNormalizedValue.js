"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNormalizedValue;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _sortWeekDays = _interopRequireDefault(require("./sortWeekDays"));

function getNormalizedValue(weekDay, isChecked, multiple, value) {
  if (multiple && value) {
    if (isChecked && !value.includes(weekDay)) {
      return (0, _sortWeekDays["default"])([].concat((0, _toConsumableArray2["default"])(value), [weekDay]));
    }

    return (0, _sortWeekDays["default"])(value.filter(function (day) {
      return day !== weekDay;
    }));
  }

  return weekDay;
}