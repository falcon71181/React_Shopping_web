import { useCallback } from 'react';
import { addDays, addMonths, isSameMonth, getFirstDayMonth, isDateBelowLimit, isDateBeyondLimit, getCalendarBounds, getSign } from '../../helpers';
export default function useMoveFocusedDayFunction(focusedDate, currentMonth, minDate, maxDate) {
  return useCallback(function (increment) {
    var _getCalendarBounds = getCalendarBounds(minDate, maxDate),
        minCalendarDate = _getCalendarBounds.minCalendarDate,
        maxCalendarDate = _getCalendarBounds.maxCalendarDate;

    var nextFocusedDate = addDays(focusedDate, increment);
    var nextFocusedMonth = isSameMonth(nextFocusedDate, currentMonth) ? currentMonth : getFirstDayMonth(addMonths(currentMonth, getSign(increment)));

    if (isDateBelowLimit(nextFocusedDate, minCalendarDate)) {
      return {
        day: minCalendarDate,
        month: getFirstDayMonth(minCalendarDate)
      };
    }

    if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate)) {
      return {
        day: maxCalendarDate,
        month: getFirstDayMonth(maxCalendarDate)
      };
    }

    return {
      day: nextFocusedDate,
      month: nextFocusedMonth
    };
  }, [focusedDate, currentMonth, minDate, maxDate]);
}