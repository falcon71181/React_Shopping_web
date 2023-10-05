import { useMemo } from 'react';
import allCountries from '../countries';
import customWarning from '../customWarning';
export default function useCountries(countries) {
  return useMemo(function () {
    if (countries.length === 0) {
      return allCountries;
    }

    var filteredCountries = allCountries.filter(function (country) {
      return countries.includes(country.isoCode);
    });

    if (filteredCountries.length === 0) {
      customWarning();
      return allCountries;
    }

    return filteredCountries;
  }, [countries]);
}