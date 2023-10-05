import { useMemo } from 'react';
import { addMonths, getLastDayMonth } from '../../helpers';
export default function useDisabledControls(yearsRange, minDate, maxDate, currentMonth, rightCalendarMonth) {
  return useMemo(function () {
    var lastDayMonth = getLastDayMonth(addMonths(currentMonth, -1));
    var lastYearItem = yearsRange[yearsRange.length - 1];
    var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    var disableNextMonth = addMonths(rightCalendarMonth, 1) > maxSelectableDate;
    var disablePreviousMonth = lastDayMonth < minSelectableDate;
    return [disablePreviousMonth, disableNextMonth];
  }, [currentMonth, maxDate, minDate, rightCalendarMonth, yearsRange]);
}