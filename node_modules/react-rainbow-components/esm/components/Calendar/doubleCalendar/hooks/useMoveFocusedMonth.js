import { useCallback } from 'react';
import { addMonths, isDateBelowLimit, isDateBeyondLimit, getFirstDayMonth, getCalendarBounds } from '../../helpers';
export default function useMoveFocusedMonthFunction(focusedDate, minDate, maxDate) {
  return useCallback(function (increment) {
    var _getCalendarBounds = getCalendarBounds(minDate, maxDate),
        minCalendarDate = _getCalendarBounds.minCalendarDate,
        maxCalendarDate = _getCalendarBounds.maxCalendarDate;

    var nextFocusedDate = addMonths(focusedDate, increment);
    if (isDateBelowLimit(nextFocusedDate, minCalendarDate)) return {
      day: minCalendarDate,
      month: getFirstDayMonth(minCalendarDate)
    };
    if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate)) return {
      day: maxCalendarDate,
      month: getFirstDayMonth(maxCalendarDate)
    };
    return {
      day: nextFocusedDate,
      month: getFirstDayMonth(nextFocusedDate)
    };
  }, [focusedDate, minDate, maxDate]);
}