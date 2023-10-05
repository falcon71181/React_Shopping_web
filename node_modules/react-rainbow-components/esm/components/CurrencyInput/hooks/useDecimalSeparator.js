import { useMemo } from 'react';
import { getSeparator } from '../helpers';
export default function useDecimalSeparator(_ref) {
  var locale = _ref.locale,
      style = _ref.style,
      currency = _ref.currency;
  return useMemo(function () {
    return getSeparator({
      locale: locale,
      type: 'decimal',
      style: style,
      currency: currency
    });
  }, [currency, locale, style]);
}