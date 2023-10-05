import { useMemo } from 'react';
import { getFormattedEventStartDate } from '../helpers';
export default function useFormattedEventStartDate(startDate, locale) {
  return useMemo(function () {
    return getFormattedEventStartDate(startDate, locale);
  }, [locale, startDate]);
}