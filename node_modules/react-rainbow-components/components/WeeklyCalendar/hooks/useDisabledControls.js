"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDisabledControls;

var _react = require("react");

var _helpers = require("../helpers");

function useDisabledControls(yearsRange, week, minDate, maxDate) {
  return (0, _react.useMemo)(function () {
    var lastYearItem = yearsRange[yearsRange.length - 1];
    var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    var isDisableNext = (0, _helpers.addWeeks)(week, 1) > maxSelectableDate;
    var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    var prevDate = (0, _helpers.addWeeks)(week, -1);
    var isDisablePrevious = prevDate.setDate(prevDate.getDate() + 6) < minSelectableDate;
    return [isDisableNext, isDisablePrevious];
  }, [maxDate, minDate, week, yearsRange]);
}