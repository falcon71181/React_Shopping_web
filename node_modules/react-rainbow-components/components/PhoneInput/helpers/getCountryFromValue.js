"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCountryFromValue;

var _findCountryByIsoCode = _interopRequireDefault(require("./findCountryByIsoCode"));

var _countries = _interopRequireDefault(require("../countries"));

function getCountryFromValue(isoCode, countries) {
  if (Array.isArray(countries) && countries.length > 0) {
    if (isoCode) {
      var _country = (0, _findCountryByIsoCode["default"])(isoCode, countries);

      if (_country) {
        return _country;
      }
    }

    var country = (0, _findCountryByIsoCode["default"])('us', countries);

    if (country) {
      return country;
    }

    return countries[0];
  }

  return (0, _findCountryByIsoCode["default"])('us', _countries["default"]);
}