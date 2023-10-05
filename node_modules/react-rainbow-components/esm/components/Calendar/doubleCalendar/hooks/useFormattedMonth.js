import { useMemo } from 'react';
import { getFormattedMonth } from '../../helpers';
export default function useFormattedMonth(month, locale) {
  return useMemo(function () {
    return getFormattedMonth(month, locale);
  }, [month, locale]);
}