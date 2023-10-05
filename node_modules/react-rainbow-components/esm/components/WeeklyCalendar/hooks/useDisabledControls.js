import { useMemo } from 'react';
import { addWeeks } from '../helpers';
export default function useDisabledControls(yearsRange, week, minDate, maxDate) {
  return useMemo(function () {
    var lastYearItem = yearsRange[yearsRange.length - 1];
    var maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    var isDisableNext = addWeeks(week, 1) > maxSelectableDate;
    var minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    var prevDate = addWeeks(week, -1);
    var isDisablePrevious = prevDate.setDate(prevDate.getDate() + 6) < minSelectableDate;
    return [isDisableNext, isDisablePrevious];
  }, [maxDate, minDate, week, yearsRange]);
}