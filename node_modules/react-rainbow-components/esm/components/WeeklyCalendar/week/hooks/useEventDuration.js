import { useMemo } from 'react';
import { getDiffMinutes } from '../helpers';
export default function useEventDuration(startDate, endDate) {
  return useMemo(function () {
    return getDiffMinutes(startDate, endDate);
  }, [endDate, startDate]);
}