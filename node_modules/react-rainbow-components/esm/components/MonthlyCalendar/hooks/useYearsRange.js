import { useMemo } from 'react';
import { getYearsRange } from '../../Calendar/helpers';
export default function useYearsChange(minDate, maxDate, month) {
  return useMemo(function () {
    return getYearsRange({
      minDate: minDate,
      maxDate: maxDate,
      currentMonth: month.getMonth()
    });
  }, [minDate, maxDate, month]);
}