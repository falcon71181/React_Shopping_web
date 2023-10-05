"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCountries;

var _react = require("react");

var _countries = _interopRequireDefault(require("../countries"));

var _customWarning = _interopRequireDefault(require("../customWarning"));

function useCountries(countries) {
  return (0, _react.useMemo)(function () {
    if (countries.length === 0) {
      return _countries["default"];
    }

    var filteredCountries = _countries["default"].filter(function (country) {
      return countries.includes(country.isoCode);
    });

    if (filteredCountries.length === 0) {
      (0, _customWarning["default"])();
      return _countries["default"];
    }

    return filteredCountries;
  }, [countries]);
}