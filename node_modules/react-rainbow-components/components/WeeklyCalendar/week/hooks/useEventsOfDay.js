"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useEventsOfDay;

var _react = require("react");

var _helpers = require("../helpers");

function useEventsOfDay(events, day) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getEventsOfDay)(events, day);
  }, [day, events]);
}