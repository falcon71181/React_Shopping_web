"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHandleCountryChange;

var _react = require("react");

function useHandleCountryChange(phone, onChange, setFocusIndex, isOpen) {
  return (0, _react.useCallback)(function (newCountry) {
    setFocusIndex(2);
    onChange({
      countryCode: newCountry.countryCode,
      isoCode: newCountry.isoCode,
      phone: phone
    });
  }, [isOpen]);
}