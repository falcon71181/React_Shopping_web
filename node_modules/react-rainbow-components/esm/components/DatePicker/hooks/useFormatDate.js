import { useMemo } from 'react';
import formatDate from '../helpers/formatDate';
import { isEmptyRange } from '../../Calendar/helpers';
export default function useFormatDate(_ref) {
  var value = _ref.value,
      format = _ref.format,
      locale = _ref.locale,
      selectionType = _ref.selectionType;
  return useMemo(function () {
    if (selectionType === 'single') return formatDate(value, format, locale);
    if (isEmptyRange(value)) return '';
    var formattedRange = value.map(function (date) {
      return formatDate(date, format, locale);
    });
    return formattedRange.join(' - ');
  }, [value, format, locale, selectionType]);
}