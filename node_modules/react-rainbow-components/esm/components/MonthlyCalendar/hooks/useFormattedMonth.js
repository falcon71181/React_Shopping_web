import { useMemo } from 'react';
import { getFormattedMonth } from '../../Calendar/helpers';
export default function useFormattedMonth(month, currentLocale) {
  return useMemo(function () {
    return getFormattedMonth(month, currentLocale);
  }, [currentLocale, month]);
}