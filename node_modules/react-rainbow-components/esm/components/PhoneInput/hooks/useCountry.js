import { useMemo } from 'react';
import { getCountryFromValue } from '../helpers';
export default function useCountry(value, countries) {
  var _ref = value || {},
      isoCode = _ref.isoCode;

  return useMemo(function () {
    return getCountryFromValue(isoCode, countries);
  }, [countries, isoCode]);
}