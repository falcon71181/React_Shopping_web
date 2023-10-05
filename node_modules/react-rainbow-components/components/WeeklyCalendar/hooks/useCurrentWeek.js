"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCurrentWeek;

var _react = require("react");

var _helpers = require("../helpers");

function useCurrentWeek(currentWeek) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getCurrentWeek)(currentWeek);
  }, [currentWeek]);
}