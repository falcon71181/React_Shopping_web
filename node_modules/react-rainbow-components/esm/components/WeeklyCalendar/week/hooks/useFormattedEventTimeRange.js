import { useMemo } from 'react';
import { getFormattedEventTimeRange } from '../helpers';
export default function useFormattedEventTimeRange(startDate, endDate, locale) {
  return useMemo(function () {
    return getFormattedEventTimeRange(startDate, endDate, locale);
  }, [endDate, locale, startDate]);
}