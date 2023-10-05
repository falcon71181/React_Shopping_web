import findCountryByIsoCode from './findCountryByIsoCode';
import allCountries from '../countries';
export default function getCountryFromValue(isoCode, countries) {
  if (Array.isArray(countries) && countries.length > 0) {
    if (isoCode) {
      var _country = findCountryByIsoCode(isoCode, countries);

      if (_country) {
        return _country;
      }
    }

    var country = findCountryByIsoCode('us', countries);

    if (country) {
      return country;
    }

    return countries[0];
  }

  return findCountryByIsoCode('us', allCountries);
}