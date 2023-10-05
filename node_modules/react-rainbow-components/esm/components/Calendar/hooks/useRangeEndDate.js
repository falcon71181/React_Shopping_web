import { useMemo } from 'react';
import { isSameDay, isEmptyRange } from '../helpers';
export default function useRangeEndDate(date, currentRange) {
  return useMemo(function () {
    return isEmptyRange(currentRange) || currentRange.length < 2 ? false : isSameDay(date, currentRange[1]);
  }, [date, currentRange]);
}