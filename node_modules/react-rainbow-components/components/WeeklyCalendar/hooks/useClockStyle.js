"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useClockStyle;

var _react = require("react");

var _helpers = require("../helpers");

function useClockStyle(clock) {
  return (0, _react.useMemo)(function () {
    return {
      top: "".concat((0, _helpers.getHeightOfDate)(clock) - 8, "px")
    };
  }, [clock]);
}