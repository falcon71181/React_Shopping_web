"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHandleCountryChange;

var _react = require("react");

function useHandleCountryChange(scrollableRef, onCountryChange, setQuery) {
  return (0, _react.useCallback)(function (newCountry) {
    setQuery('');
    scrollableRef.current.scrollTo(0, 0);
    onCountryChange(newCountry);
  }, [onCountryChange, scrollableRef, setQuery]);
}