"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePreviousIndex;

var _react = require("react");

function usePreviousIndex(focusedIndex) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = focusedIndex;
  });
  return ref.current;
}