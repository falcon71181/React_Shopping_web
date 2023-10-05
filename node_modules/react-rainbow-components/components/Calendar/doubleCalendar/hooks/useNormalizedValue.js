"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useNormalizedValue;

var _react = require("react");

var _helpers = require("../../helpers");

function useNormalizedValue(value) {
  var normalizedValue = (0, _react.useRef)(null);
  return (0, _react.useMemo)(function () {
    if ((0, _helpers.isSameDay)(value, normalizedValue.current)) return normalizedValue.current;
    normalizedValue.current = (0, _helpers.normalizeDate)(value);
    return normalizedValue.current;
  }, [value]);
}