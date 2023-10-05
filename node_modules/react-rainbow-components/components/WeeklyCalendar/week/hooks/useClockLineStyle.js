"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useClockLineStyle;

var _react = require("react");

var _helpers = require("../../helpers");

function useClockLineStyle(clock) {
  return (0, _react.useMemo)(function () {
    return {
      top: "".concat((0, _helpers.getHeightOfDate)(clock), "px")
    };
  }, [clock]);
}