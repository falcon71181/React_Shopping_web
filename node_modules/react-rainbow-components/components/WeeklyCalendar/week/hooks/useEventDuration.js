"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useEventDuration;

var _react = require("react");

var _helpers = require("../helpers");

function useEventDuration(startDate, endDate) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getDiffMinutes)(startDate, endDate);
  }, [endDate, startDate]);
}