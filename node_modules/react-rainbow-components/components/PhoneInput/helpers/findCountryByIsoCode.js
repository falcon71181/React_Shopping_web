"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findCountryByIsoCode;

function findCountryByIsoCode(isoCode, countries) {
  return countries.find(function (value) {
    return value.isoCode === isoCode;
  });
}