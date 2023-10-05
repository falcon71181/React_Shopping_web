"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFilterCountries;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _filterCountries = _interopRequireDefault(require("../helpers/filterCountries"));

function useFilterCountries(countries, country) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var countriesFiltered = (0, _react.useMemo)(function () {
    return (0, _filterCountries["default"])(query, countries, country);
  }, [countries, country, query]);
  return [query, countriesFiltered, setQuery];
}