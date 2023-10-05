"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDisabledControls;

var _react = require("react");

var _helpers = require("../../helpers");

function useDisabledControls(yearsRange, minDate, maxDate, currentMonth, rightCalendarMonth) {
  return (0, _react.useMemo)(function () {
    var lastDayMonth = (0, _helpers.getLastDayMonth)((0, _helpers.addMonths)(currentMonth, -1));
    var lastYearItem = yearsRange[yearsRange.length - 1];
    var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    var disableNextMonth = (0, _helpers.addMonths)(rightCalendarMonth, 1) > maxSelectableDate;
    var disablePreviousMonth = lastDayMonth < minSelectableDate;
    return [disablePreviousMonth, disableNextMonth];
  }, [currentMonth, maxDate, minDate, rightCalendarMonth, yearsRange]);
}