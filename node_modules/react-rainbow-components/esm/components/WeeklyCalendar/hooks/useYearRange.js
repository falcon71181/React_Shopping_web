import { useMemo } from 'react';
import { getYearsRange } from '../../Calendar/helpers';
export default function useYearRange(minDate, maxDate, date) {
  return useMemo(function () {
    return getYearsRange({
      minDate: minDate,
      maxDate: maxDate,
      currentMonth: date.getMonth()
    });
  }, [minDate, maxDate, date]);
}