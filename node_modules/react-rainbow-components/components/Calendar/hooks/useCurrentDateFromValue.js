"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCurrentDateFromValue;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useCurrentDateFromValue(value) {
  return (0, _react.useMemo)(function () {
    if (!Array.isArray(value)) return value;

    var _value = (0, _slicedToArray2["default"])(value, 2),
        rangeStart = _value[0],
        rangeEnd = _value[1];

    return rangeStart || rangeEnd;
  }, [value]);
}