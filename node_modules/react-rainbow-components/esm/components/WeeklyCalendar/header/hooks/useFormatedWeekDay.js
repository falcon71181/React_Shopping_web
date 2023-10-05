import { useCallback } from 'react';
export default function useFormatedWeekDay(locale) {
  return useCallback(function (day) {
    return new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    }).format(day);
  }, [locale]);
}