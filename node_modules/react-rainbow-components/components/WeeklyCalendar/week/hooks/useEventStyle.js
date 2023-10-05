"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useEventStyle;

var _react = require("react");

var _helpers = require("../../helpers");

function useEventStyle(startDate, duration) {
  return (0, _react.useMemo)(function () {
    return {
      height: "".concat((0, _helpers.getHeightOfMinutes)(duration), "px"),
      top: "".concat((0, _helpers.getHeightOfDate)(startDate), "px")
    };
  }, [startDate, duration]);
}