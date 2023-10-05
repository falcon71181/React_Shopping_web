import { useMemo } from 'react';
import { getYearsRange } from '../../helpers';
export default function useYearsRange(minDate, maxDate, currentMonth) {
  return useMemo(function () {
    return getYearsRange({
      minDate: minDate,
      maxDate: maxDate,
      currentMonth: currentMonth.getMonth()
    });
  }, [minDate, maxDate, currentMonth]);
}