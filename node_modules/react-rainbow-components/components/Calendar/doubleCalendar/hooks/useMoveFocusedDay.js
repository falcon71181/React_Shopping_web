"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMoveFocusedDayFunction;

var _react = require("react");

var _helpers = require("../../helpers");

function useMoveFocusedDayFunction(focusedDate, currentMonth, minDate, maxDate) {
  return (0, _react.useCallback)(function (increment) {
    var _getCalendarBounds = (0, _helpers.getCalendarBounds)(minDate, maxDate),
        minCalendarDate = _getCalendarBounds.minCalendarDate,
        maxCalendarDate = _getCalendarBounds.maxCalendarDate;

    var nextFocusedDate = (0, _helpers.addDays)(focusedDate, increment);
    var nextFocusedMonth = (0, _helpers.isSameMonth)(nextFocusedDate, currentMonth) ? currentMonth : (0, _helpers.getFirstDayMonth)((0, _helpers.addMonths)(currentMonth, (0, _helpers.getSign)(increment)));

    if ((0, _helpers.isDateBelowLimit)(nextFocusedDate, minCalendarDate)) {
      return {
        day: minCalendarDate,
        month: (0, _helpers.getFirstDayMonth)(minCalendarDate)
      };
    }

    if ((0, _helpers.isDateBeyondLimit)(nextFocusedDate, maxCalendarDate)) {
      return {
        day: maxCalendarDate,
        month: (0, _helpers.getFirstDayMonth)(maxCalendarDate)
      };
    }

    return {
      day: nextFocusedDate,
      month: nextFocusedMonth
    };
  }, [focusedDate, currentMonth, minDate, maxDate]);
}