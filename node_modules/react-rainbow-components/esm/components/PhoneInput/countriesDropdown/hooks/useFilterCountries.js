import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useMemo } from 'react';
import filterCountries from '../helpers/filterCountries';
export default function useFilterCountries(countries, country) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var countriesFiltered = useMemo(function () {
    return filterCountries(query, countries, country);
  }, [countries, country, query]);
  return [query, countriesFiltered, setQuery];
}