"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCountry;

var _react = require("react");

var _helpers = require("../helpers");

function useCountry(value, countries) {
  var _ref = value || {},
      isoCode = _ref.isoCode;

  return (0, _react.useMemo)(function () {
    return (0, _helpers.getCountryFromValue)(isoCode, countries);
  }, [countries, isoCode]);
}