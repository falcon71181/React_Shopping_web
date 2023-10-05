import { useCallback } from 'react';
export default function useFormattedNumberDay(locale) {
  return useCallback(function (day) {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    }).format(day);
  }, [locale]);
}