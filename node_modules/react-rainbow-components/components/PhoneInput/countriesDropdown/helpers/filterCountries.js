"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = filterCountries;

function filterCountries(query, countries, country) {
  if (query === '' || query === '+') {
    var _filteredCountries = countries.filter(function (value) {
      return value.isoCode !== country.isoCode;
    });

    _filteredCountries.unshift(country);

    return _filteredCountries;
  }

  var queryToLower = query.toLowerCase();
  var isFilteredCountry = false;
  var filteredCountries = countries.filter(function (value) {
    if (!isNaN(query)) {
      var index = value.countryCode.toString().indexOf(queryToLower);

      if (index === 0 || index === 1) {
        if (value.isoCode === country.isoCode) {
          isFilteredCountry = true;
          return false;
        }

        return true;
      }

      return false;
    }

    if (value.country.toLowerCase().indexOf(queryToLower) !== -1 || value.isoCode.indexOf(queryToLower) !== -1) {
      if (value.isoCode === country.isoCode) {
        isFilteredCountry = true;
        return false;
      }

      return true;
    }

    return false;
  }) || [];

  if (isFilteredCountry) {
    filteredCountries.unshift(country);
  }

  return filteredCountries;
}